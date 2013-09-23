/* 
 * This is a PhantomJS script (tested with version 1.9.0),
 * and it needs PhantomJS http://phantomjs.org/ in order to be run.
 *
 * Usage, from the command line:
 * 
 * phantomjs render_courses_list.js
 * 
 * */

/* Import needed filesystem functionality */
var fs = require('fs');
/* Later on, we’re going to use the slugify function,
 * that we lifted from Django: */
var slugify = require('./slugify').slugify;

/* Our goal is to create an overview off all the courses taken at
 * a Dutch University, for a degree equivalency procedure Habitus
 * is taking at a Belgian university.
 * 
 * Habitus provided us with a list of courses, in a JSON format.
 * For each of the courses, we know the url of an online description,
 * the date the exam was taken and the result obtained.
 * 
 * We want to print all these pages in a way that the formatting of
 * the university is retained (to make it feel authentic) but the page
 * layout is consistent (to make it feel thorough).
 * 
 * We’re going to go through all the web-pages with course descriptions,
 * throw out the elements we don’t want, add the metadata about the
 * obtained results to them, and print them as PDF’s.
 */

/* We read in the data from a JSON file, with the following structure:
 * [
 * {
        "url": "https://studiegids.leidenuniv.nl/courses/show/3418/creative-directorship",
        "date": "2004-06-25",
        "result": 10
    },
   etcetera
 * */
var courses = JSON.parse(fs.read('courses_list.json'));

/* Because PhantomJS can open many pages asynchronously, we have
 * to keep track of how many of the pages we have tried to visit—
 * so once we have tried them all we can call phantom.exit(); */
var pagesVisited = 0;

/* This is the function we are going to run for each ‘course’ object */
var generate = function(course) {
    if (typeof course.url !== "undefined") {
        var address = course.url;
    }

    /* We create the PhantomJS webpage object. We will make one for each course, we will
     * manipulate it until it contains what we want, so that then we can print it to PDF
     * */
    var page = require('webpage').create()
    
    // I am not sure if setting the viewportSize actually influences the rendered pdf,
    page.viewportSize = { width: 1190, height: 873 };
    // I imagine it is rather setting the paperSize settings that is the most important
    page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' };

    /* We try to open the link provided for the course */
    page.open(address, function (status) {
        if (status === 'success') {
            
            /* In cases where Habitus could not find a course description on line, he provided
             * us with a description himself, in the form of a snippet of HTML.
             * 
             * We create a very basic HTML page with this information.
             * 
             * Note: PhantomJS still tells us that it managed to open a page,
             * even if the address we requested is ‘undefined’. It might not be good to rely
             * on this behaviour.
             * 
             */
            if (typeof course.url === "undefined" && typeof course.description !== "undefined") {
               
                page.content = "<html><body><p>Examendatum: " + course.date + "<br/> Behaald resultaat: " + course.result.toString().replace('.',',') + "</p><hr/><p>" + course.description + "</p></body></html>";
                
                /* The first line of the description represents the title: */
                var pageTitle = course.description.split("<br")[0];
                
            } 
            
            /* In other cases, we have managed to open a web page with a course description.
             * 
             * We need to know what kind of layout the course description has,
             * so we can layout the page in a form we want.
             * 
             * Most of the course descriptions are of the format
             * http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1802&oc=2538&garb=0.8258779689203948
             * 
             * In this case (if archief.studiegids.leidenuniv can be found in
             * the uri) we’ll treat it in the following way:
             * */
            else if (address.indexOf("archief.studiegids.leidenuniv") !== -1) {
                /* First, we inject the JavaScript library jQuery into the opened webpage.
                 * This way, we can use jQuery’s easy methods of manipulating the
                 * webpage, even if the webpage originally did not feature this script. */
                page.injectJs('jquery-1.10.1.js');
                
                /* PhantomJS can execute JavaScripts inside a webpage, by passing a function
                 * that is evaluated.
                 * 
                 * The execution is ‘sandwiched’, that is to say the in-page Javascript
                 * can’t access variables from your PhantomJS script: you need to pass in
                 * variables to the function. Here we are passing in the course description
                 * so we can use it on the page.
                 * 
                 * The other way around, we might want to get some info out of
                 * the webpage: to do so we can have the function return a value.
                 * The way we call it, the variable pageTitle get assigned the return
                 * value of the function.
                 *   */
                var pageTitle = page.evaluate(function(course) {
                   
                    /* The main course description is nested deeply inside a table,
                     * which is used for layout purposes and also contains the navigational
                     * menu etc.
                     *
                     * We take the course description out of the table, and prepend it
                     * to the body of the page.
                     * That is to say, we move it to the beginning of the document.
                     * 
                     * We then remove the original containing table from the page,
                     * and remove the blueish background image. */
                    $("span#content").prependTo($("body"));
                    $("body > table").remove();
                    $("body").css("background-image", "none");
                    
                    /* We create a bit of HTML containing a meta-text about this course: 
                     * the day Habitus took the exam,
                     * the note obtained, and the link to the webpage. */
                    var metaTxt = "<p>Examendatum: " + course.date + "<br/> Behaald resultaat: " + course.result.toString().replace('.',',') + "<br/>Hyperlink beschrijving: " + course.url + "</p><hr/>"
                    
                    /* The metatext is added to the beginning of the page :*/
                    $(metaTxt).prependTo($("body"));
                    
                    /* We find the title of the course, and return this value. */
                    return $(".egTitel").text();
                }, course);
            }
            
            /* Some course descriptions are in a newer format, like
             * https://studiegids.leidenuniv.nl/courses/show/3418/creative-directorship 
             */ 
            else if (address.indexOf("studiegids.leidenuniv") !== -1) {
                /* We use the same approach, but adjusted for the different HTML structure of
                 * these pages.
                 * */
                var pageTitle = page.evaluate(function(course) {
                    /* This is analogous to the other layout.
                     * The main course description, we move to the beginning of the page.
                     * We remove the nav bar that is called #top, and disable some backgrounds. */
                    $("#content").prependTo($("body"));
                    $("#top").remove();
                    $("body, #dashboard, th").css("background", "none");
                    
                    /* This is just like in the other format: */
                    var metaTxt = "<p>Examendatum: " + course.date + "<br/> Behaald resultaat: " + course.result.toString().replace('.',',') + "<br/>Hyperlink beschrijving: " + course.url + "</p><hr/>"
                    
                    $(metaTxt).prependTo($("body"));
                    
                    /* In this case, we can find the course title in the only H1 header the page contains. */
                    return $("h1").text();
                }, course);
            }
            
            // Log the title to the command line so we can see what’s going on:
            console.log(pageTitle);
            
            /* Because we will create a PDF for each course, we need some way to have order in
             * the final documents. Because we know the day the exam was taken, we will add it
             * to the beginning of the filename, so that the final list of pdf’s can easily be
             * ordered by date.
             * 
             * The slugify function can turn a title like ‘ABC Boekwetenschap’ into ‘abc-boekwetenschap’
             * 
             * Adding it up, we will get filenames like ‘2007-03-05-abc-boekwetenschap.pdf’
             * */
            var output = course.date + '-' + slugify(pageTitle) + '.pdf';
            //page.render(output);
            // Log the web address (if applicable) and output-filename, so we can see what’s going on:
            console.log(address, output);
            pagesVisited += 1;
        } else {
            console.log('Unable to load the address!');
            console.log(address);
            pagesVisited += 1;
        }
        
        /* Check if we already have visited all the pages in the courses array,
         * if so, done. */
        if (pagesVisited === courses.length) {
            phantom.exit();
        }
    });
}

/* This is where we actually start the script, running the ‘generate’ function
 * for each object in ‘courses’: */
for (var i=0; i < courses.length; i++) {
    generate(courses[i]);
}

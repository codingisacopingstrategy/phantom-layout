/* 
 * This is a PhantomJS script (tested with version 1.9.0),
 * and it needs PhantomJS http://phantomjs.org/ in order to be run.
 *
 * Usage, from the command line:
 * 
 * phantomjs render_courses_list.js
 * 
 * */

var slugify = require('./slugify').slugify;
var fs = require('fs');

var courses = JSON.parse(fs.read('courses_list.json'));

var done = 0;

var generate = function(course) {
    if (typeof course.url !== "undefined") {
        var address = course.url;
    }
    var page = require('webpage').create()
    page.viewportSize = { width: 1190, height: 873 };
    page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' };
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            console.log(address);
            done += 1;
            if (done === courses.length) {
                phantom.exit();
            }
        } else {
            if (typeof course.url === "undefined" && typeof course.description !== "undefined") {
                page.content = "<html><body><p>Examendatum: " + course.date + "<br/> Behaald resultaat: " + course.result.toString().replace('.',',') + "</p><hr/><p>" + course.description + "</p></body></html>";
                getContent = course.description.split("<br")[0];
            } else if (address.indexOf("archief.studiegids.leidenuniv") !== -1) {
                page.injectJs('jquery-1.10.1.js');
                var getContent = page.evaluate(function(course) {
                    $("span#content").prependTo($("body"));
                    $("body > table").remove();
                    $("body").css("background-image", "none");
                    
                    var metaTxt = "<p>Examendatum: " + course.date + "<br/> Behaald resultaat: " + course.result.toString().replace('.',',') + "<br/>Hyperlink beschrijving: " + course.url + "</p><hr/>"
                    $(metaTxt).prependTo($("body"));
                    
                    return $(".egTitel").text();
                }, course);
            } else if (address.indexOf("studiegids.leidenuniv") !== -1) {
                var getContent = page.evaluate(function(course) {
                    $("#content").prependTo($("body"));
                    $("#top").remove();
                    $("body, #dashboard, th").css("background", "none");
                    
                    var metaTxt = "<p>Examendatum: " + course.date + "<br/> Behaald resultaat: " + course.result.toString().replace('.',',') + "<br/>Hyperlink beschrijving: " + course.url + "</p><hr/>"
                    $(metaTxt).prependTo($("body"));
                    
                    return $("h1").text();
                }, course);
            }
            console.log(getContent);
            var output = course.date + '-' + slugify(getContent) + '.pdf';
            page.render(output);
            console.log(address, output);
            done += 1;
            if (done === courses.length) {
                phantom.exit();
            }
        }
    });
}

for (var i=0; i < courses.length; i++) {
    generate(courses[i]);
}

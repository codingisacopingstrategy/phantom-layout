var LATIN_MAP = {
      'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç':
      'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I',
      'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö':
      'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U',
      'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à':'a', 'á':'a', 'â': 'a', 'ã': 'a', 'ä':
      'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
      'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó':
      'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u',
      'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y'
    }
  , LATIN_SYMBOLS_MAP = {
      '©':'(c)'
    }
  , GREEK_MAP = {
      'α':'a', 'β':'b', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 'η':'h', 'θ':'8',
      'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'3', 'ο':'o', 'π':'p',
      'ρ':'r', 'σ':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'x', 'ψ':'ps', 'ω':'w',
      'ά':'a', 'έ':'e', 'ί':'i', 'ό':'o', 'ύ':'y', 'ή':'h', 'ώ':'w', 'ς':'s',
      'ϊ':'i', 'ΰ':'y', 'ϋ':'y', 'ΐ':'i',
      'Α':'A', 'Β':'B', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'H', 'Θ':'8',
      'Ι':'I', 'Κ':'K', 'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'3', 'Ο':'O', 'Π':'P',
      'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 'Φ':'F', 'Χ':'X', 'Ψ':'PS', 'Ω':'W',
      'Ά':'A', 'Έ':'E', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ή':'H', 'Ώ':'W', 'Ϊ':'I',
      'Ϋ':'Y'
    }
  , TURKISH_MAP = {
      'ş':'s', 'Ş':'S', 'ı':'i', 'İ':'I', 'ç':'c', 'Ç':'C', 'ü':'u', 'Ü':'U',
      'ö':'o', 'Ö':'O', 'ğ':'g', 'Ğ':'G'
    }
  , RUSSIAN_MAP = {
      'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
      'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
      'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c',
      'ч':'ch', 'ш':'sh', 'щ':'sh', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
      'я':'ya',
      'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh',
      'З':'Z', 'И':'I', 'Й':'J', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O',
      'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C',
      'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sh', 'Ъ':'', 'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu',
      'Я':'Ya'
    }
  , UKRAINIAN_MAP = {
      'Є':'Ye', 'І':'I', 'Ї':'Yi', 'Ґ':'G', 'є':'ye', 'і':'i', 'ї':'yi', 'ґ':'g'
    }
  , CZECH_MAP = {
      'č':'c', 'ď':'d', 'ě':'e', 'ň': 'n', 'ř':'r', 'š':'s', 'ť':'t', 'ů':'u',
      'ž':'z', 'Č':'C', 'Ď':'D', 'Ě':'E', 'Ň': 'N', 'Ř':'R', 'Š':'S', 'Ť':'T',
      'Ů':'U', 'Ž':'Z'
    }
  , POLISH_MAP = {
      'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z',
      'ż':'z', 'Ą':'A', 'Ć':'C', 'Ę':'e', 'Ł':'L', 'Ń':'N', 'Ó':'o', 'Ś':'S',
      'Ź':'Z', 'Ż':'Z'
    }
  , LATVIAN_MAP = {
      'ā':'a', 'č':'c', 'ē':'e', 'ģ':'g', 'ī':'i', 'ķ':'k', 'ļ':'l', 'ņ':'n',
      'š':'s', 'ū':'u', 'ž':'z', 'Ā':'A', 'Č':'C', 'Ē':'E', 'Ģ':'G', 'Ī':'i',
      'Ķ':'k', 'Ļ':'L', 'Ņ':'N', 'Š':'S', 'Ū':'u', 'Ž':'Z'
    }
  , ALL_DOWNCODE_MAPS = [
      LATIN_MAP
    , LATIN_SYMBOLS_MAP
    , GREEK_MAP
    , TURKISH_MAP
    , RUSSIAN_MAP
    , UKRAINIAN_MAP
    , CZECH_MAP
    , POLISH_MAP
    , LATVIAN_MAP
    ]
  ;
/**
 * @private
 * character map precompiler
 */
var Downcoder = (function(){
  var d = {};

  d.map = {}
  d.chars = '' ;
  for(var i in ALL_DOWNCODE_MAPS) {
    var lookup = ALL_DOWNCODE_MAPS[i]
    for (var c in lookup) {
      d.map[c] = lookup[c] ;
      d.chars += c;
    }
  }
  d.regex = new RegExp('[' + d.chars + ']|[^' + d.chars + ']+','g');

  return d;
})();

var downcode = function(slug) {
  var downcoded = ""
    , pieces = slug.match(Downcoder.regex);

  if (pieces) {
    for (var i = 0 ; i < pieces.length ; i++) {
      if (pieces[i].length == 1) {
        var mapped = Downcoder.map[pieces[i]] ;
        if (mapped != null) {
          downcoded+=mapped;
          continue ;
        }
      }
      downcoded+=pieces[i];
    }
  } else {
    downcoded = slug;
  }
  return downcoded;
}

/**
 * Makes a string URL frendly
 * @param  {String}  s         input string
 * @param  {Integer} num_chars output max length
 * @return {String}            urlified string
 */
var slugify = function(s, num_chars) {
  // changes, e.g., "Petty theft" to "petty_theft"
  // remove all these words from the string before urlifying
  s = downcode(s)
                                // if downcode doesn't hit, the char will be stripped here
    .replace(/[^-\w\s]/g, '')   // remove unneeded chars
    .replace(/^\s+|\s+$/g, '')  // trim leading/trailing spaces
    .replace(/[-\s]+/g, '-')    // convert spaces to one hyphen
    .toLowerCase();             // convert to lowercase
  return (!!num_chars)
    ? s.substring(0, num_chars).replace(/-$/, '') // trim to first num_chars chars
    : s
}



var vakken = [
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1806&oc=2538&garb=0.41651308978907764",
        date: "2004-01-23",
        result: 7,
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1808&oc=1770&garb=0.8624855044763535",
        date: "2004-06-18",
        result: 7
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1802&oc=2538&garb=0.8258779689203948",
        date: "2004-06-21",
        result: 8.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=5765&oc=1770&garb=0.22289910493418574",
        date: "2005-01-24",
        result: 8
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=5926&oc=1770&garb=0.9344569414388388",
        date: "2005-01-26",
        result: 8.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=5764&oc=1770&garb=0.3897774175275117",
        date: "2005-01-12",
        result: 7.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1817&oc=1770&garb=0.18093082890845835",
        date: "2005-05-27",
        result: 7
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1807&oc=1770&garb=0.3854915602132678",
        date: "2005-06-16",
        result: 8
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=5762&oc=1770&garb=0.16480868449434638",
        date: "2005-01-10",
        result: 7.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=5760&oc=1770&garb=0.3800792172551155",
        date: "2005-01-24",
        result: 8.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=1810&oc=1770&garb=0.6895615053363144",
        date: "2005-06-14",
        result: 6
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1217&c=17&t=3&v=&k=17620&oc=1531&garb=0.8658553489949554",
        date: "2007-01-12",
        result: 8.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=8559&oc=3477&garb=0.23841218068264425",
        date: "2006-01-19",
        result: 8
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=8560&oc=3477&garb=0.0945990402251482",
        date: "2006-08-18",
        result: 6.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=8564&oc=3479&garb=0.5839489551726729",
        date: "2006-08-29",
        result: 9
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=8561&oc=3479&garb=0.9801573762670159",
        date: "2006-01-13",
        result: 8.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1828&c=17&t=3&v=&k=13580&oc=4853&garb=0.479113892884925",
        date: "2007-08-27",
        result: 6
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1829&c=17&t=3&v=&k=13727&oc=4854&garb=0.8365924316458404",
        date: "2007-06-28",
        result: 8
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1829&c=17&t=3&v=&k=13724&oc=4854&garb=0.173421876039356",
        date: "2007-01-16",
        result: 8.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1829&c=17&t=3&v=&k=13719&oc=4854&garb=0.3736415933817625",
        date: "2007-01-25",
        result: 7
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1829&c=17&t=3&v=&k=13334&oc=4854&garb=0.02151276939548552",
        date: "2007-03-05",
        result: 6.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1830&c=17&t=3&v=&k=13585&oc=4855&garb=0.35634006024338305",
        date: "2007-06-29",
        result: 7.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1830&c=17&t=3&v=&k=13584&oc=4855&garb=0.3092919245827943",
        date: "2007-01-23",
        result: 7.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=1830&c=17&t=3&v=&k=13737&oc=4855&garb=0.7944507016800344",
        date: "2007-04-05",
        result: 7.5
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=8570&oc=3479&garb=0.9069217124488205",
        date: "2006-08-29",
        result: 6
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?m=2176&c=17&t=3&v=&k=8550&oc=3479&garb=0.8808403569273651",
        date: "2006-06-22",
        result: 7.5
    },
    {
        url: "https://studiegids.leidenuniv.nl/courses/show/3418/creative-directorship",
        date: "2004-06-25",
        result: 10
    },
    {
        url: "http://archief.studiegids.leidenuniv.nl/index.php3?c=17&t=3&q=aWQ9MTQ3MA==&v=&k=1470",
        date: "2003-01-28",
        result: 8
    },
    {
        date: "2007-01-25",
        result: 8.5,
        description: "<em>Mondeling tentamen Accent 3e jaars Moderne Letterkunde</em><br/> 4 ects<br/> Verplicht onderdeel van het opleidingsaccent Moderne Letterkunde."
    },
    {
        date: "2007-01-25",
        result: 8,
        description: "<em>Individueel vak 01 Bijvak KABK</em><br/> 20 ects<br/> Via de Faculteit der Kunsten is de studie Beeld en Geluid aan de Koninklijke Academie van Beeldende Kunsten en het Koninklijk Conservatorium erkend als bijvak voor de studie aan de Universiteit Leiden."
    },
];

var done = 0;

var generate = function(vak) {
    if (typeof vak.url !== "undefined") {
        var address = vak.url;
    }
    var page = require('webpage').create()
    page.viewportSize = { width: 1190, height: 873 };
    page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' };
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            console.log(address);
            done += 1;
            if (done === vakken.length) {
                phantom.exit();
            }
        } else {
            if (typeof vak.url === "undefined" && typeof vak.description !== "undefined") {
                page.content = "<html><body><p>Examendatum: " + vak.date + "<br/> Behaald resultaat: " + vak.result.toString().replace('.',',') + "</p><hr/><p>" + vak.description + "</p></body></html>";
                getContent = vak.description.split("<br")[0];
            } else if (address.indexOf("archief.studiegids.leidenuniv") !== -1) {
                page.injectJs('jquery-1.10.1.js');
                var getContent = page.evaluate(function(vak) {
                    $("span#content").prependTo($("body"));
                    $("body > table").remove();
                    $("body").css("background-image", "none");
                    
                    var metaTxt = "<p>Examendatum: " + vak.date + "<br/> Behaald resultaat: " + vak.result.toString().replace('.',',') + "<br/>Hyperlink beschrijving: " + vak.url + "</p><hr/>"
                    $(metaTxt).prependTo($("body"));
                    
                    return $(".egTitel").text();
                }, vak);
            } else if (address.indexOf("studiegids.leidenuniv") !== -1) {
                var getContent = page.evaluate(function(vak) {
                    $("#content").prependTo($("body"));
                    $("#top").remove();
                    $("body, #dashboard, th").css("background", "none");
                    
                    var metaTxt = "<p>Examendatum: " + vak.date + "<br/> Behaald resultaat: " + vak.result.toString().replace('.',',') + "<br/>Hyperlink beschrijving: " + vak.url + "</p><hr/>"
                    $(metaTxt).prependTo($("body"));
                    
                    return $("h1").text();
                }, vak);
            }
            console.log(getContent);
            var output = vak.date + '-' + slugify(getContent) + '.pdf';
            page.render(output);
            console.log(address, output);
            done += 1;
            if (done === vakken.length) {
                phantom.exit();
            }
        }
    });
}

for (var i=0; i < vakken.length; i++) {
    generate(vakken[i]);
}

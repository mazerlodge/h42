
// Example of a web server written using Node.js

// Use link from Output window to access the server.
// s/b something like: 'http://h42.mazerlodge.cloud9ide.com'.

var http = require('http');

var protocol = "http://";
var core = "www.sitebase";
var ext = ".txt";


function makeURL(cn, sub, abv, series, idx, max) {
    // Note: Max passed in to be used in one-by looping detection.
    var rval = "looped";

    // Index must be zero padded to three digits        
    var paddedIdx = idx;

    if (idx<100)
        paddedIdx = "0" + idx;

    if (idx<10)
        paddedIdx = "00" + idx;

    // protocol//core{w/ core number}/subject/abrevSNx00C
    if (idx <= max) {
        // don't edit the core for display if core number is 1.
        var displayCore = core;
        if (cn != "1")
            displayCore = core + cn;
            
        rval = protocol + displayCore + ".com/" + sub +  "/" + abv + series + "x" + paddedIdx + ext;
    }
    
    return rval;

}

function serverAction(req, resp) {
    
    resp.writeHead(200, {'content-type' : "text/html"});
    
    var body = go(req);
    if (typeof body != "undefined")
        resp.write(body);
        
    resp.end("EndofMessage");

}

function go(req) {
    
    var rval = "Expecting coreNum(cn) sub abv ser max  [opt: k w/ svr ext content(ct) ]   <br><br>\n\n";

    var qsEngine = require('querystring');
    var qs = qsEngine.parse(req.url);
    var coreNumber = qs.cn;
    var subject = qs.sub;
    var abbrev = qs.abv;
    var series = qs.ser;
    var max = qs.max;
    var contentType = qs.ct;

    
    // check for core parameter overrides
    if (qs.k == "42") {
        core = "www." + qs.svr;
        ext = "." + qs.ext;
    }

    if (typeof contentType != "undefined")
        contentType = "html";
    else
        contentType = "plain";
    
    var help = qs.help;
    if (help == "1")
        return rval;

    for(var idx=1; idx<=max; idx++) {
        if (contentType == "plain")
            rval += makeURL(coreNumber, subject, abbrev, series, idx, max) + "   <BR><BR>\n\n";
        else
            rval += " <a target='_new' href='" + makeURL(coreNumber, subject, abbrev, series, idx, max) + "'> " + idx + "</a><BR /><BR />\n\n";      
    }

    return rval;
}


var svr = http.createServer(serverAction);

// Note: on a stand alone node.js implementation, 
//   this would be an actual port number, like 1337.
svr.listen(process.env.C9_PORT);

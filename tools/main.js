/**
 * This script parses and downloads descriptions, samples etc. from the MTA Wiki.
 */

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

let debug = false;
let fetchType = 2; // 0 Server, 1 Client, 2 Shared

let added = [];

/*request("http://wiki.multitheftauto.com/wiki/GetAccountSerial", function(err, resp, body) {
    if (err)
        throw err;



    $ = cheerio.load(body);
    console.log($(this).find("h1[class = 'firstHeading']").text());
});*/

function removeNewlines(str) {
    //remove line breaks from str
    str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/\t/g, ' ');
    str = str.toString().trim().replace(/(\r\n|\n|\r)/g, "");
    return str
}

/*fs.readFile(__dirname + '/demo2.html', function (err, data) {
    if (err) {
        throw err;
    }
    parseAndWriteFunctionPage(data);
});*/

/*fs.readFile(__dirname + '/demo_list.html', function (err, data) {
    
});*/

function readFunctionList(url) {
    request(url, function (err, resp, body) {
        if (err) {
            readFunctionList(url);
            //throw err;
            return;
        }

        $ = cheerio.load(body.toString());

        let contextNode = $("#mw-content-text");
        let listing = contextNode.find("h2 > span[class = 'mw-headline']").each(function () {
            let item = $(this).parent().next();
            item.find("li").each(function () {
                console.log($(this).find('a').text() + " - " + $(this).find('a').attr("href"));
                readFunctionPage("https://wiki.multitheftauto.com" + $(this).find('a').attr("href"));
            });
        });

        if(fetchType == 2 && url == "https://wiki.multitheftauto.com/wiki/Client_Scripting_Functions")
            readFunctionList("https://wiki.multitheftauto.com/wiki/Server_Scripting_Functions");
    });
}

function readFunctionPage(url) {
    if (debug) {
        fs.readFile(__dirname + '/demo2.html', function (err, data) {
            if (err) {
                throw err;
            }
            parseAndWriteFunctionPage(data);
        });
        return;
    }

    request({ url: url, followRedirect: false}, function (err, resp, body) {
        if (err) {
            readFunctionPage(url);
            //throw err;
            return;
        }

        console.log("Parsing: " + url);

        parseAndWriteFunctionPage(body);
    });
}

function parseAndWriteFunctionPage(body) {
    $ = cheerio.load(body);

    let label = $("#firstHeading").text();
    let contextNode = $("#mw-content-text");
    let desc = removeNewlines(contextNode.find("p:first-child").text()).replace(/\"/g, "\\\"");
    if (desc == "")
        desc = removeNewlines(contextNode.find("p:nth-child(2)").text()).replace(/\"/g, "\\\"");

    let syntax = removeNewlines(contextNode.find("pre[class = 'prettyprint lang-lua']").first().text());
    let type = $("meta[name = 'headingclass']").attr("data-subcaption");

    if (fetchType != 2 && type == "Shared function") return;
    if (fetchType == 2 && type != "Shared function") return;

    console.log("Found function: " + label);

    if((label.toLowerCase()) in added)
    {
        console.log("Skipping as it already exists.");        
        return;
    }
    added.push(label.toLowerCase());

    //console.log(contextNode.find("h3 > span[id = 'Required_Arguments']").parent().next().text());

    var args = [];
    var argDescs = [];
    contextNode.find("h3 > span[id = 'Required_Arguments']").parent().next().find("li").each(function () {
        if ($(this).text() === null) return;
        if ($(this).text().split(/:/) == null || $(this).text().split(/:/).length < 2) {
            args.push(removeNewlines($(this).text()).replace(/\"/g, "\\\""));
            argDescs.push(removeNewlines($(this).text()).replace(/\"/g, "\\\""));
            return;
        }

        args.push(removeNewlines($(this).text().split(/:/)[0]).replace(/\"/g, "\\\""));
        argDescs.push(removeNewlines($(this).text().split(/:/)[1]).replace(/\"/g, "\\\""));
    });

    var myregexp = /(.*) (.*?) \((.*?)\) ?$/i;
    var match = myregexp.exec(syntax);
    //match[1] // return type
    //match[2] // label
    //match[3] // args    

    let fileName = "";
    if (fetchType == 0)
        fileName = "serverfunctions.txt";
    else if (fetchType == 1)
        fileName = "clientfunctions.txt";
    else if (fetchType == 2)
        fileName = "sharedfunctions.txt"

    if (!debug) {
        if (match !== null)
            fs.appendFileSync(fileName, "new MTAFunction(" + fetchType + ", \"" + match[2] + "\", \"" + desc + "\", \"" + match[1] + "\", [\"" + match[3].split(/, /).join("\",\"") + "\"],{}).toCompletionItem(), \n");
        else {
            var myregexp2 = /(.*) (.+?) ?\( ?\) ?/i;
            var match2 = myregexp2.exec(syntax);
            if (match2 === null) {
                console.log(label.toLowerCase() + " - fail.");
                fs.appendFileSync(fileName, "new MTAFunction(" + fetchType + ", \"" + label.toLowerCase() + "\", \"" + desc + "\", \"????\", [], {}).toCompletionItem(),\n");
                return;
            }

            fs.appendFileSync(fileName, "new MTAFunction(" + fetchType + ", \"" + match2[2] + "\", \"" + desc + "\", \"" + match2[1] + "\", [], {}).toCompletionItem(),\n");
        }
    }
}

if (debug) {
    fs.readFile(__dirname + '/demo3.html', function (err, data) {
        if (err) {
            throw err;
        }
        parseAndWriteFunctionPage(data);
    });
} else {
    if (fetchType == 0)
        readFunctionList("https://wiki.multitheftauto.com/wiki/Server_Scripting_Functions");
    else if (fetchType == 1 || fetchType == 2)
        readFunctionList("https://wiki.multitheftauto.com/wiki/Client_Scripting_Functions");
}
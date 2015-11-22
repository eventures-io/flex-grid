'use strict';

var _ = require('lodash');
var http = require("http");
var xml2json = require('xml2json');
//var xmldoc = require('xmldoc');
var request = require('request');
var cheerio = require('cheerio');

var parserOptions = {
    object: false,
    reversible: false,
    coerce: true,
    sanitize: false,
    trim: true,
    arrayNotation: false
};


// Get list of feed items
exports.index = function(req, res) {

    //http://blog.conservation.org/category/cat-oceans/feed/
    //http://www.oceanhealthindex.org/RSS/
    //http://mix.chimpfeedr.com/d2392-Ocean-mix
    //http://www.miramarsailing.com/sailing_features.html

    var options = {
        host: 'mix.chimpfeedr.com',
        path: '/c951b-conservation-org'
    };

    var jsonResult;

    var req = http.get(options, function(response) {

        var bodyChunks = [];
        response.on('data', function(chunk) {
            bodyChunks.push(chunk);
        }).on('end', function() {
                var body = Buffer.concat(bodyChunks);
                jsonResult = xml2json.toJson(body, parserOptions);
              //  console.log(jsonResult);
                res.json(jsonResult);
            });
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });

};


// Get article content
exports.article = function(req, res) {
    var url = req.params.url;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var page = cheerio.load(body);
            var article = page('article').html();
            res.json(article);
        }
    });



}
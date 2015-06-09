/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var http = require("http");
var xml2json = require('xml2json');

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
        path: '/d2392-Ocean-mix'
    };

    var jsonResult;

    var req = http.get(options, function(response) {
        //console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));

        var bodyChunks = [];
        response.on('data', function(chunk) {
            bodyChunks.push(chunk);
        }).on('end', function() {
                var body = Buffer.concat(bodyChunks);
                jsonResult = xml2json.toJson(body, parserOptions);
                //console.log(jsonResult);
                res.json(jsonResult);
            });
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


};
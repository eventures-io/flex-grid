'use strict';

var express = require('express');
var controller = require('./reader.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:url', controller.article);

module.exports = router;
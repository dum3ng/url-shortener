'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shortUrl = new  Schema({
    original:String,
    short:Number,
});

module.exports = mongoose.model('ShortUrl',shortUrl);

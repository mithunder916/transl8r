'use strict'
var chai = require('chai');
var mocha = require('mocha');
var expect = require('chai').expect;
var assert = require('chai').assert;
var Parse = require('../src/parse');

describe("arrayifyText", function(){
	var arrayifyText = Parse.arrayifyText;
	it("should return an empty array if there is no input", function(){
		expect(arrayifyText('')).to.eql([]);
	});

	it("should return an array of length one with a single word input", function(){
		assert.lengthOf(arrayifyText('ayahuasca'), 1);
	});

	it("should include punctuation as an index in the array", function(){
		var wordOfAdvice = arrayifyText('Eat clean, my friend.');
		expect(wordOfAdvice).to.contain(',');
		expect(wordOfAdvice).to.contain('.');
		expect(wordOfAdvice[2]).to.eql(',');
		expect(wordOfAdvice[5]).to.eql('.');
	});
});

describe("objectifyText", function(){
	console.log(Parse.objectifyText(Parse.arrayifyText('Eat clean, my friend.')))
})
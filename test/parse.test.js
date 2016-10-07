'use strict'
var chai = require('chai');
var mocha = require('mocha');
var expect = require('chai').expect;
var assert = require('chai').assert;
var Parse = require('../src/parse');
var arrayifyText = Parse.arrayifyText;
var objectifyText = Parse.objectifyText;

describe("arrayifyText", function(){
	it("should return an empty array if there isn't an input", function(){
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
	var motherPlantArray = arrayifyText("Mrs. Mother Plant, pray 4 me...");
	var motherPlant = objectifyText(motherPlantArray);

	it("should convert each word and punctuation mark into an object", function(){
		expect(motherPlant[1]).to.be.an('object');
		expect(motherPlant[2]).to.be.an('object');
		expect(motherPlant[3]).to.be.an('object');
		expect(motherPlant[5]).to.be.an('object');
	});

	xit("should have text, type, and length keys", function(){

	});

	xit("should have type word when the element is a word", function(){

	});

	xit("should have type punctuation when the element is a punctuation", function(){

	});

	xit("has length property that states length of element", function(){

	});
});
'use strict'

/* 

	Parses through a short amount of text content
	and stores to database by line (or sentence) an array
	with individual word objects.

*/

var Parse = {
	arrayifyText: function(text){
		if (text === '') return [];
		else return text.split(/\s*\b\s*/);
	},

	objectifyText: function(arrayifiedText){
		return arrayifiedText.map(function(element){
			if (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g.test(element)) var type = 'punctuation';
			else type = 'word';

			return {
				text: element,
				type: type,
				length: element.length
			}
		})
	}
}

/*

	TO DO:
	1). Finish the test specs for Parse.objectifyText

	2). Make Parse method, partOfSpeech, that adds a part of speech
		property if the element is a word that tells the part of speech
		(noun, verb, adjective, etc.)

	3). Test specs for partOfSpeech method

*/

module.exports = Parse;
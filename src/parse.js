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
				type: type
			}
		})
	}
}

module.exports = Parse;
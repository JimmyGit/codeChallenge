/********************
Compare arrays and create an object that shows the count.

For this example:
{foo: 1, bar: 2, a: 2}

*********************/

var words = ["foo", "bar", "a"];
var sentence = "after a foo, bar and foobar, we all went to a bar";
sentence = sentence.replace(/,/g, '');
sentence = sentence.split(" ");
var results = {};

	words.map(function(word){
  var count = 0;
  	
    //Sentence now in an array
    sentence.map(function(sentence_words){
    	if(word ==  sentence_words) {
      	count++;
      }
    });
    results[word] = count;

  
  });
  
  console.log(results);
  

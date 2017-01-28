/***********************
First string has multiple words, create object to house them. The last word in the first string will pair with the 2nd string.
Examples:

// makeObject("foo.bar", "buzz"); 
// returns {foo: {bar: "buzz"}}

// makeObject("one.two.three", "foobar");  
// returns {one: {two: {three: "foobar"}}}

// makeObject("kingdom.phylum.class.order", "primates");  
// returns {kingdom: {phylum: {class: {order: "primates"}}}}

// makeObject("kingdom.phylum.class.order", "primates");  
// returns {kingdom: {phylum: {class: {order: "primates"}}}}

***********************/

var a = "kingdom.phylum.class.order";
var b = "primates"


function makeObject(a, b) {
	a = a.split(".");
	var obj = {};
  
	for (var i = (a.length - 1); i > -1; i--) {
  	if (i == (a.length -1)) {
    	obj[a[i]] = b;
      var obj1 = obj;
      obj = {};
    } else {
      obj[a[i]] = obj1;
      obj1 = obj;
      obj = {}
      
    }
  }
    
  console.log(obj1);
};

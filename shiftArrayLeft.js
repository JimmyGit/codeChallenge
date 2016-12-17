var a = [1,2,3,4,5]; //You can make this array any length you want.
var n = a.length;
var k = a.length - 1;	
var i = 0;
 
while ( i < k) {
    var l = a.shift();
    a.push(l)
    i++;
}

console.log(a.join(' '));

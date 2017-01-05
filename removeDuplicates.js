/**
Sample Input:
[ '6', '1', '2', '2', '3', '3', '4' ]

input[0] is the amount of numbers you will iterate through

Expected result:
1, 2, 3, 4

**/

var testArr = [ '6', '1', '2', '2', '3', '3', '4' ]; 
var arr = [];
var a = testArr[0];
var b = 1;
testArr.shift();
      
testArr.map(function(number){

    if (number != testArr[b]) {
        arr.push(number);
    }
    b++;
});

console.log(arr.join(" ").toString())
        

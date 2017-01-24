/*
Make array [1,2,3,4,5] => [1,2,3,4,5, 1,2,3,4,5]
*/

var x = [1,2,3,4,5];

x.map(function(number){
   return x.push(number);
});

console.log(x);

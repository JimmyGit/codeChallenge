/***********************
Compare two arrays and combine the non-duplicate values

var Array = ["10","20","30"];
var Array2 = ["1","3", "5", "10"];

Combined Array = ["1", "3", "5", "10", "20", "30"]

***********************/

var arr = ["10","20","30"];
var arr1 = ["1","3", "5", "10"];

for(var i = 0; i < arr1.length; i++) {
  
  if (arr.indexOf(arr1[i]) < 0){
    arr.push(arr1[i]);
  }

}

console.log(arr.sort(function(a,b){return a- b}));

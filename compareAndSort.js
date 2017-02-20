/***********************
Compare two arrays and combine the non-duplicate values

Array = [10, 20, 30]
Array2 = [1, 10, 15, 30]

Combined Array = [1, 10, 15,20, 30]

***********************/

var arr = [10, 20, 30];
var arr1 = [1, 10, 15, 30];

for(var i = 0; i < arr1.length; i++) {
  
  if (arr.indexOf(arr1[i]) < 0){
    var len = arr.length;
    arr[arr.length] = arr1[i];
  }

}

console.log(arr.sort());

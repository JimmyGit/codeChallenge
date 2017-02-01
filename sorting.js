/*********************************
Array ["3", "2", "1"]

Sorting step:
1. ["3", "2", "1"] -> ["2", "3", "1"]
2. ["2", "3", "1"] -> ["2", "1", "3"]
3. ["2", "1", "3"] -> ["1", "2", "3"]



Output:
Array is sorted in 3 swaps.
First Element: 1
Last Element: 3

**********************************/

function main() {
    a = ["3", "2", "1"];
    
    var last = a.length - 1;
    var counter1 = 0;
    var counter = 0;
    var b;

    
    while(counter1 < a.length + 1) {

      var c = 0;
      var d = 1;  
      
      //Second while loop
      while(d < a.length) {
          if (a[c] > a[d]) {
            b = a[c];
            a[c] = a[d];
            a[d] = b;
            counter++;
        }
          c++;
          d++;
      }
      //End Second while loop
        
        counter1++;
    }
 
    console.log("Array is sorted in " + counter + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[last]);

}

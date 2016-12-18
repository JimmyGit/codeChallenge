/*
Input:
2
Hacker
Rank

Split word to even and odd letters in a string.
Hce akr
Rn ak
*/


function processData(input) {

    input = input.split("\n");
    
    var odd = [];
    var even = [];
    var i = 0;
    var j = 1;
        
    while (j < input.length ) {
    
    var temp = [];
    temp = input[j].split("");
        
        while (i < temp.length) {
            if (i % 2 == 0) {
                even[i] = temp[i];    
            }
            else if (i % 2 == 1 ) {
                odd[i] = temp[i];
            }
            i++;
        }
        
    console.log(even.join("") + " " + odd.join(""));
    even = [];
    odd = [];
    i = 0;
    j++;
    }
} 

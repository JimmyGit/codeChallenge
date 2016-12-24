/*
Turn number into binary 
Count the highest consecutive 1's

Example:
n = 439
Binary:
110110111

Highest number of consecutive 1's = 3

*/


    var n = 439;
    n = n.toString(2).split("");
    
    var i = 0;
    var counter = 0;
    var high = 0;
    
    while ( i < n.length) {
        
        while (n[i] == 1) {
            counter++;
            i++;
        }
        
       
        if (counter > high) {
            high = counter;
        }
        counter = 0;
        i++;
    }
    
    console.log(high);
        
}

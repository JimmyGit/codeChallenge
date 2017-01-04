/**
- input[0] is the length of entries
- the next 3 entries are names with phone numbers
- match the names with the numbers. If the entry is not in the phonebook, display "Not Found".

**/

var input = [ '3',
  'sam 99912222',
  'tom 11122222',
  'harry 12299933',
  'sam',
  'edward',
  'harry' ]
  
  var phonebook = {}; 
    
   for (var i = 1; i <= input[0]; i++) {
         var k = input[i];
         k = k.split(" ");
         phonebook[k[0]] = k[1]; //Populates Phonebook Obj
     }



     for (var search = i; search < input.length; search++) {
         var num = phonebook[input[search]]; 
         if (num !== undefined) {
                 console.log(input[search] + '=' + num);
              } else {
                  console.log("Not found");
              }
             
     }    
  
  

/***
Input given is: 
10 
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060

10 is  total numbers

Find:
mean
median
mode

**/
    
    var input = '10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060';
    

    input = input.split("\n");
    
    
    var length = parseInt(input[0]);
    
    // split the 2nd half of array and sorted smallest to biggest
    num = input[1].split(" ").sort(function(a, b){return a-b});
    
    // made numbers in array intergers
    num = num.map(function(x) {
        return (parseInt(x, 10));
    })

    
    //mean and mode
        var answer = 0;
        var temp_counter = 0;
        var counter = 0;
        var y = 1;
        var mode = num[0];
        
        num.map(function(number) {

            if(number == num[y]) {
                var temp_mode = number;
                temp_counter++;
            }
            if(temp_counter > counter) {
                if (counter == 0) {
                    mode = temp_mode;
                }
                if(temp_mode == mode || temp_mode < mode){
                    mode = temp_mode;
                    counter = temp_counter;
                }
                temp_counter = 0;
            }
            
            
            y++;
            answer += number;
        });


       //median
       var j = length/2;
       var med = num[j] + num[j-1];

       console.log((answer/length).toFixed(1));
       console.log((med/2).toFixed(1));
       console.log(mode);

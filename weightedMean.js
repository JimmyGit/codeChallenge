/********************

input: 
20
10 40 30 50 20 10 40 30 50 20 1  2  3  4  5  6  7  8  9  10
1  2  3  4  5  6  7  8  9  10 10 40 30 50 20 10 40 30 50 20

(10x1) + (40x2) + ... (2*40) + (3*30)...     sum
_____________________________________     = ______
1 + 2 + ... 40 + 30 ..                       sum

Answer set to 1 decimal point

Total:
3420 / 355 = 9.6 


********************/
var input = '20\n10 40 30 50 20 10 40 30 50 20 1 2 3 4 5 6 7 8 9 10\n1 2 3 4 5 6 7 8 9 10 10 40 30 50 20 10 40 30 50 20'

    input = input.split('\n');
    var length = input[0];
    var x = input[1].split(" ")
    var weight = input[2].split(" ");
    var sum = 0;
    var divisible = 0;

    for (var i = 0; i < length; i++) {
        var j = parseInt(weight[i]);
        sum += (parseInt(x[i]) * j);
        divisible += j;
    }

    console.log((sum/divisible).toFixed(1))

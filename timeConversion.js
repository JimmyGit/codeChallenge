/*
Sample time: 
05:36:12PM -> 17:36:12

Note:
12:00:12AM -> 00:00:12

12:12:14PM -> 12:12:14
*/

var time = "05:36:12PM";
time = time.split(":");
    
if (time[2].indexOf("PM") > 0 && parseInt(time[0]) != 12 ) {
    time[0] = parseInt(time[0]) + 12;
}
else if (time[2].indexOf("AM") > 0 && parseInt(time[0]) == 12) {
    time[0] = "00";
}

time[2] = time[2].slice(0,2);
console.log(time.join(":"));

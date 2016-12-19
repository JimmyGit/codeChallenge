    /*
    Sample Array:
    [ 1, 4, 3, 2 ]
    
    Result:
    [ 2, 3, 4, 1 ]
    */
    
    var arr = [ 1, 4, 3, 2 ];
    var i = 0;
    var b = []; 
    var arrayLength = arr.length;

    while(i < arrayLength) {
      var a = arr.pop();
      b.push(a);
      i++;
    }
    console.log(b.join(" "));
    

 /*
 Count the amount of words in a camelcase word.
 
 */
 
    var s = saveChangesInTheEditor;
    var i = 0;
    var count = 1;
    s = s.split('');
    
    while (i < s.length) {
        if (s[i] === s[i].toUpperCase()) {
            count++;
        }
        i++;
    }
    console.log(count);

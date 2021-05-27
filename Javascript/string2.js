/*  
Que  Find the Longest Word in a String.

Input:"The quick brown fox jumped over the lazy dog"
Output: 6

*/

function longestWord(str){
    if (str){
        str = str.trim();
    result = -1;
    strArray = str.split(' ');
    for (elm of strArray){
        
        if(elm.length > result){
            result = elm.length;
        }
    }
    return result;
    }
    return "Empty string";
}


console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(longestWord(""));
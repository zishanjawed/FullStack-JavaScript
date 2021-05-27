/* 
    Que  Title Case a Sentence.
    Input:I'm a little tea pot"
    Output: I'm A Little Tea Pot.

*/


function titleCase(str){
    str = str.trim()
    let result =[]
    for (let elm of str.split(' ')){
        result.push(elm[0].toUpperCase()+elm.substr(1))
    }

    return result.join(' ')
}

console.log(titleCase("  I'm a little tea pot  "))
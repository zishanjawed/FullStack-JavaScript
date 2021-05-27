/*
Q Given a array first=[1,2,3,4,5];
 Write a JavaScript program that fill second array in reverse order of first
 ?
narr=[5,4,3,2,1]
*/

function reverseArray(array){
    
    let reverse = [];
    for (let elm of array){
        reverse.unshift(elm);
    }
    return reverse;
}

console.log(reverseArray([1,2,3,4,5]));


//  using reverse funtion

console.log([1,2,3,4,5].reverse());




/*
Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
Input arr1= [1, 2, 3]
arr2= [100, 2, 1,10]
Output: [1,2,3,100,10]
*/


function arrayUnion(arr1,arr2){
    result = arr1;
    for (let elm of arr2){
        if (!result.includes(elm)){
            result.push(elm);
        }
    }

    return result;
}


console.log(arrayUnion([1, 2, 3],[100, 2, 1,10]));
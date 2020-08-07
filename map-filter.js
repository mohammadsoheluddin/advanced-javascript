/** 
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

function square (element){
    return element * element;
}

numbers.map(function(element){
    console.log(element);
})
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

function square (element){
    return element * element;
}

numbers.map(function(element, index){
    console.log(element, index);
})
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

function square (element){
    return element * element;
}

numbers.map(function(element, index, array){
    console.log(element, index, array);
})
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

function square (element){
    return element * element;
}

const result = numbers.map(function(element, index, array){
    return element * element;
})

console.log(result);
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element, index, array){
//     return element * element;
// })

const result = numbers.map(x => x * x);

console.log(result);
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

const bigger = numbers.filter( x => x > 5);
console.log(bigger);
*/


/** 
const numbers = [3, 4, 5, 6, 7, 8];

const smaller = numbers.filter( x => x < 5);
console.log(smaller);
*/

// reduce, find


/** 
const numbers = [3, 4, 5, 6, 7, 8];
const smaller = numbers.filter( x => x < 3);
console.log(smaller);
// []
*/



const numbers = [3, 4, 5, 6, 7, 8];
const smaller = numbers.filter( x => x < 3);

const isThere = numbers.find(x => x > 5);

console.log(isThere);



// map => array [3, 4, 5]
// filter => array [6, 7, 8]
// find => element/3 

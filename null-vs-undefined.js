// let pakhi;
// console.log(pakhi);
// result will be undefined

/** 
function add(num1, num2){
    console.log(num1 + num2);
}

const result = add(13, 82);
console.log(result);
// in this case you will get your result 95 with undefined.
*/


/** 
function add(num1, num2){
    console.log(num1 + num2);
    return
}

const result = add(13, 82);
console.log(result);
// In this function you will also get undefined. 
Because you didn't mention what will be return.
*/


/** 
function add(num1, num2){
    console.log(num1, num2)
    // You should use return in this line unless you will get undefined.
}

const result = add(13);
console.log(result);
// You will get here another one undefined. 
// Because you didn't pass your second parameter num2's value.
*/


/** 
const premik = {name:"smart dude", phone:458421};
console.log(premik.gf);
// Your property "gf" is not existing in your declared object.
// That's why you will get undefined.
*/


/** 
let fun = undefined;
console.log(fun);
// You have defined your value. But you will get your result undefined.
// Because undefined is a reserved word.
*/


/** 
let ages = [2, 5, 9];
console.log(ages[11]);
// undefined. 
*/


// need to learn more about null
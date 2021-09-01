const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;

    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);


// 
let bonus = 20;

function sum1(first, second) {
    //return first + second;
    let result = (first + second + bonus);
    console.log(bonus);
    if (result > 9) {
        const mood = "Happy";
        console.log(mood);
    }
    return result;
}
const output = sum1(3, 7);
console.log(output);
let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is Falsy');
}

let name = 12;
if (name || name == 0) {
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
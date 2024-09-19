/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

laugh(5);
function laugh (num){
    let numHa = []
    for (let i=0; i < num; i++) {
        numHa += "ha"
    }
    console.log(numHa + "!")
}
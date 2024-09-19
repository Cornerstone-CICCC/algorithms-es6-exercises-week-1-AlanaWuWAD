/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

emotion("happy", function laugh(num){
    let numHa = []
    for (let i=0; i < num; i++) {
        numHa += "ha"
    }
    return numHa + "!"
})

function emotion(feeling, laughFunction) {
    console.log (`I am ${feeling}, ${laughFunction(10)}`)
}

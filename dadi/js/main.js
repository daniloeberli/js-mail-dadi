"use strict"

const userDice = Math.floor(Math.random() * 6) + 1; //definiamo i due numeri casuali da 1 a 6
const computerDice = Math.floor(Math.random() * 6) + 1; //definiamo i due numeri casuali da 1 a 6

if(userDice < computerDice){
    alert(`Ha vinto il computer : userDice: ${userDice} , computerDice: ${computerDice}`)
}else if (userDice > computerDice){
    alert(`Hai vinto tu : userDice: ${userDice}, computerDice: ${computerDice}`)
}else if (userDice === computerDice){
    alert(`Avete scelto gli stessi numeri : userDice: ${userDice}, computerDice: ${computerDice}`)
}
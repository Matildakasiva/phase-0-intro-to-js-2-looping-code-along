// Code your solutions in this file


let names = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(names , surprise){
    let messages = []
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`
        
        messages.push(message)
    }
    return messages
}
let surprise = 'surprise'
let cards = writeCards(names, surprise)
console.log(cards)



function countDown(num){
    while (num >= 0) {
        console.log(num)
        num--
    }
}
countDown(4)
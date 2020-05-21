let userInput = document.querySelector('#userInput')
let buttonRoll = document.querySelector('#rollButton')
let totalAmount = document.querySelector('#total')
let buttonTotal = document.querySelector('#rollShow')
let dieRolls = []
let listOfRolls = document.querySelector('#allRolls')




buttonRoll.addEventListener('click', function(){
    let numberOfRolls = userInput.value
    let counter = 0
    while (counter < numberOfRolls){
        let currentNumber = Math.floor(Math.random() * 6) + 1 
        dieRolls.push(currentNumber)
        let reducer = (accumulator, currentNumber) => accumulator + currentNumber
        let sumOfRolls = dieRolls.reduce(reducer)
        totalAmount.innerHTML = sumOfRolls
        
        counter += 1
    }
})

buttonTotal.addEventListener('click', function(){
    

    let index = 0
    while(index < dieRolls.length){
        
        listOfRolls.innerHTML += '<li>'+ dieRolls[index] + '</li>'
        
        index += 1
}
})


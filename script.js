//variables

const userInput = document.getElementById('user-input')
const resultsDiv = document.getElementById('results-div')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const phoneBtnContainer= document.getElementById('phone-btn-container')


function getNumber(number){
    const numberValue = number.value
    return numberValue
};

function checkNumber(){
    const number = getNumber(userInput)
    const regex = /(1\s?)?([0-9]{3}|\([0-9]{3}\))[\-\s]?[0-9]{3}[\-\s]?[0-9]{4}/

    return regex.test(number)
}

function renderResult(){
    checkNumber()
    const number = getNumber(userInput)
    checkNumber() ? resultsDiv.textContent = `Valid US number: ${number}`: resultsDiv.textContent = `Invalid US number: ${number}`
}

phoneBtnContainer.addEventListener('click', (e)=>{
    const eventTarget = e.target
    switch(eventTarget.id){
        case 'check-btn' : renderResult();
        break;
        case 'clear-btn' : clearAll()
    }
})


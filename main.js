import sounds from './sounds.js'
import Sound from './sounds.js'

const buttoPlay = document.querySelector('.buttonPlay')
const buttonStop = document.querySelector('.buttonStop')
const buttonSum = document.querySelector('.buttonSum')
const buttonSubtraction = document.querySelector('.buttonSubtraction')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let timerTimeOut
let svg 

const sound = Sound()

function resetTimer() {
    minutes.textContent = minutes.textContent = 2
}

function sum() {
    minutes.textContent = Number(minutes.textContent) + 5
    minutes.textContent = String(minutes.textContent).padStart(2, "0") 
}
function subtraction() {
    minutes.textContent = Number(minutes.textContent) - 5
    minutes.textContent = String(minutes.textContent).padStart(2, "0") 
}

function countDown(){
    sound.relogio.play()
    timerTimeOut = setTimeout(function(){
        let newSegunds = Number(seconds.textContent)
        let newMinutes = Number(minutes.textContent)
        if(newMinutes <= 0  && newSegunds <= 0) {  
            sound.despertador.play()
            return
        }

        if(newSegunds <= 0 ){
            minutes.textContent = String(minutes.textContent - 1).padStart(2, "0")
            newSegunds = 20
        }

        seconds.textContent = String(newSegunds - 1).padStart(2, "0")
        countDown()
    },1000)
}

buttoPlay.addEventListener('click', () =>{
    countDown()
})
buttonStop.addEventListener('click', () =>{
    clearTimeout(timerTimeOut)
})
buttonSum.addEventListener('click', () =>{
    sum()
})
buttonSubtraction.addEventListener('click', () =>{
    if(minutes.textContent <= 5){
        alert(`Número menor de 5`)
        return
    }
    subtraction()
})


card1.addEventListener('click', () =>{
        sound.bg.pause()
        sound.despertador.play()
})

card2.addEventListener('click', () =>{
    sound.despertador.pause()
    sound.chuva.play()
    console.log(`card2`)
})

card3.addEventListener('click', () =>{
    sound.chuva.play()
    console.log(`card3`)
})

card4.addEventListener('click', () =>{
    sound.bg.play()
    console.log(`card4`)
})




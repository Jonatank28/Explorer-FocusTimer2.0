export default function () {

    const relogio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const despertador = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const chuva = new Audio("https://github.com/Jonatank28/FocusTimer2.0/blob/master/sounds/Chuva.wav?raw=true")
    const lareira = new Audio("https://github.com/Jonatank28/FocusTimer2.0/blob/master/sounds/Lareira.wav?raw=true")
    const cafeteria = new Audio("https://github.com/Jonatank28/FocusTimer2.0/blob/master/sounds/Cafeteria.wav?raw=true")
    const floresta = new Audio("https://github.com/Jonatank28/FocusTimer2.0/blob/master/sounds/Floresta.wav?raw=true")
    
    return {
        relogio,
        despertador,
        chuva,
        lareira,
        cafeteria,
        floresta,
    }
}
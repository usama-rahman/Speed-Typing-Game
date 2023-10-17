const RANDOM_QOUTE_API_URL = "https://api.quotable.io/random"

const qouteElement = document.getElementById('qouteDispaly');
const qouteInput = document.getElementById('qouteInput');
const timerElement = document.getElementById('timer');


qouteInput.addEventListener('input', () => {
    const arrayQoute = qouteElement.querySelectorAll('span')
    const arrayValue = qouteInput.value.split('')
    arrayQoute.forEach((characterSpan, index) => {
        const character = arrayValue [index]
        if(character == null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
        }
    })
    if(correct) getNextQoute()
})

function getRandomQoute(){
    return  fetch(RANDOM_QOUTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}



async function getNextQoute (){
    const qoute  = await getRandomQoute()
    qouteElement.innerHTML = '';
    qoute.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.classList.add('correct')
        characterSpan.innerText = character
        qouteElement.appendChild(characterSpan)
    })

    qouteInput.value = null;
    startTimer()
}

let startTime

function startTimer (){
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
       timerElement.innerText = getTimerTime()
    },1000)
}

function getTimerTime(){
    return  Math.floor((new Date() - startTime) / 1000)
}


getNextQoute()


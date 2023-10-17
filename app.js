const RANDOM_QOUTE_API_URL = "https://api.quotable.io/random"

const qouteElement = document.getElementById('qouteDispaly');
const qouteInput = document.getElementById('qouteInput');

function getRandomQoute(){
    return  fetch(RANDOM_QOUTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function getNextQoute (){
    const qoute  = await getRandomQoute()
    qouteElement.innerHTML = qoute;
    

    qouteInput.value = null;
}

getNextQoute()

// Working
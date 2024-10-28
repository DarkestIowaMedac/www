document.addEventListener('DOMContentLoaded', () => {
    alert("fapfnaefaji")
    const numero = document.querySelector('#contador')
    numero.textContent = 5
})

const boton = document.querySelector('#boton')
boton.addEventListener('click', async() => {
    for (let index = 0; index < array.length; index++){
        numero.textContent = getRandomInt(90) 
        await sleep(1000)
    }
    
})

function getRandomInt(max){
    return Math.floor(Math.random() * max+1);
}

const sleep = function (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
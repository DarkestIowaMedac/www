/*document.addEventListener('DOMContentLoaded', () => {
    const numero = document.querySelector('#contador')
    numero.textContent = 5
})*/

const numero = document.querySelector('#contador')
const boton = document.querySelector('#botonjugar')

boton.addEventListener('click', async() => {
    //for (let index = 0; index < array.length; index++){
        //await sleep(1000)
    //}

    let arraynumeros = []
    for (let elemento = 1; elemento <=90; elemento++){
        arraynumeros.push(elemento)
    }
    while (arraynumeros.length>0){
        let randomi = getRandomInt(arraynumeros.length - 1)
        numero.textContent = arraynumeros[randomi]
        modificarEstilos(arraynumeros[randomi])
        arraynumeros.splice(randomi,1)
        await sleep(300)
    }

})
//String(num).padStart(2, '0');
function modificarEstilos(numero){
    let id = String(numero).padStart(2, '0')
    let bolaestilo1 = document.querySelector("#d"+id)
    bolaestilo1.style.color = 'red'
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

const sleep = function (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

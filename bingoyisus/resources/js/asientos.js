let imagenes = document.querySelectorAll("img") //te da un array con todas las imágenes

let h1 = document.querySelector('h1')

const reservados = document.getElementById('reservados');

let aleatorio = document.querySelector('#aleatorio')


let reser = 0

aleatorio.addEventListener("click", async() => {

    location.reload();


    /*
    let encontrado=false
    for (let i = 0; i < imagenes.length && !encontrado; i++) {
        if (imagenes[i].id==1) {
            imagenes[i].src="/public/0.png"
            imagenes[i].id='0';
            reservados.textContent++
            encontrado=true
    }}
    */

});

document.addEventListener('DOMContentLoaded',() => {
    imagenes.forEach(imagen=>{

        let id = imagen.id


        if (id==0) {
            reservados.textContent++
        }

    }); 

    location.reload();

})

imagenes.forEach(imagen => { //recorremos todo el array de las imagenes

        
    imagen.addEventListener("click", async() => { //si hacemos click en la imagen realiza una función


        let disp = imagen.id

        if (disp==1){
            imagen.src="/public/0.png"

            imagen.id='0';

            reservados.textContent++

            
        }else{
            alert("asiento ya reservado")
        }


        

        

    })

});
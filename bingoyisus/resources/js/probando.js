const numero = document.querySelector('#contador')
let array = [];
const video = document.querySelector("#youtubeAudio");
let contador = 0


for (let index = 1; index <=90; index++) {
    array.push(index);   
}

document.addEventListener('DOMContentLoaded',() => {

})


const boton = document.querySelector('#boton')

boton.addEventListener('click', async() => {

    //-----------------Función para cambiar el color del texto h1------------------------------
        function cambiarColor() {
            const colores = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500', 'text-purple-500', 'text-pink-500'];
            let indice = 0;
            const h1 = document.getElementById('titulo');

            setInterval(() => {
                h1.className = `text-8xl font-bold ${colores[indice]}`; // Cambia la clase del color
                indice = (indice + 1) % colores.length; // Cambia al siguiente color
                }, 20); // Cambia cada 100 ms
        }

        cambiarColor()



        // Reinicia el video para que se reproduzca automáticamente
        video.src = "https://www.youtube.com/embed/hVQpuS97xvc?autoplay=1&mute=0&controls=0&showinfo=0&rel=0"; 


    for (let i = 0; i < 90 && contador<15; i++) {

        //te genera un número entre 0 y la posición del último elemento del array
         let posicion = getRandomInteger(0,(array.length-1))

         console.log(posicion)
         console.log(array)

         //te busca el número generado y pilla la posición y la borra

         numero.textContent = array[posicion]


         let bola = document.getElementById(numero.textContent)

         let numCarton = document.getElementById("num" + numero.textContent);



         if (numCarton) {
            if (numCarton.textContent == numero.textContent) {
                contador++;
                numCarton.style.backgroundImage = "url('https://images.ecestaticos.com/8EBBZE62ftU42XZnfJZ28UjxHmY=/2x63:1179x725/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F767%2F86c%2F09a%2F76786c09ad023ba5aea47d681e04cc37.jpg')";
                numCarton.style.backgroundSize = "cover"; // Ajusta la imagen al tamaño del elemento
                numCarton.style.backgroundPosition = "center"; // Centra la imagen
            }
        } else {
            console.warn(`Element with ID num${numero.textContent} does not exist.`);
        }

         cambiarColorFondo(bola);

         array.splice(posicion,1)


        await sleep(200);
    }

    numero.textContent=""
    numero.style.backgroundImage = "url('https://images.ecestaticos.com/8EBBZE62ftU42XZnfJZ28UjxHmY=/2x63:1179x725/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F767%2F86c%2F09a%2F76786c09ad023ba5aea47d681e04cc37.jpg')";
    numero.style.backgroundSize = "cover"; // Ajusta la imagen al tamaño del elemento
    numero.style.backgroundPosition = "center"; // Centra la imagen

    await sleep(200);


    alert("Bingooooooo!!!!!")

})

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function generarNumeroAleatorio() {
//    return Math.floor(Math.random() * array.length);
//}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = cambiarColor; // Inicia el cambio de color al cargar la página


//cambiar el color de fondo
function cambiarColorFondo(elemento) {
    const colores = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
    let indice = 0;

    setInterval(() => {
        elemento.style.backgroundColor = colores[indice]; // Cambia el color de fondo
        indice = (indice + 1) % colores.length; // Cambia al siguiente color
    }, 20); // Cambia cada 1000 ms (1 segundo)
}

const numero = document.querySelector('#contador')
const boton = document.querySelector('#botonjugar')
const botoncarton = document.querySelector('#botoncarton')
const botonserie = document.querySelector('#botonserie')

let serie = 1
let carton = 1
let columnaserie = [
    {0: 3},
    {1: 2},
    {2: 2},
    {3: 2},
    {4: 2},
    {5: 2},
    {6: 2},
    {7: 2},
    {8: 1}
]
let numeroscolumna = [[],[],[],[],[],[],[],[],[]]
for (let k = 1; k<=9; k++){
    numeroscolumna[0].push(k)
}
for (let h = 1; h<=7; h++){
    for (let j = 0; j<=9; j++){
        numeroscolumna[h].push(h*10+j)
    }
}
for (let m = 0; m<=10; m++){
    numeroscolumna[8].push(80+m)
}

let columnaserie2 = JSON.parse(JSON.stringify(columnaserie))
let numeroscolumna2 = JSON.parse(JSON.stringify(numeroscolumna))


console.log(numeroscolumna2)
console.log(columnaserie2)

botonserie.addEventListener('click',() => {
    if(carton != 1){
    carton = 1
    serie++
    }
    columnaserie = JSON.parse(JSON.stringify(columnaserie2))
    numeroscolumna = JSON.parse(JSON.stringify(numeroscolumna2))
    for (let i = 0; i < 6; i++) {
        crearCarton()
    }

})
boton.addEventListener('click', async() => {
    const imagenrueda = document.querySelector('#activarrueda')
    imagenrueda.style.backgroundImage = "url('../imagenes/bingoeditado.png')"

    let arraynumeros = []
    for (let elemento = 1; elemento <=90; elemento++){
        arraynumeros.push(elemento)
    }
    while (arraynumeros.length>0){
        await sleep(6030)
        let randomi = getRandomInt(arraynumeros.length)
        numero.textContent = arraynumeros[randomi]
        modificarEstilos(arraynumeros[randomi])
        arraynumeros.splice(randomi,1)
        await sleep(2980)
    }
})

function crearCarton(){
    const cartones = document.querySelector('#cartones')
    const tabla = document.createElement('table')
    tabla.id = "s"+serie+"c"+carton
    const caption = document.createElement('caption');
    caption.textContent = tabla.id;
    tabla.appendChild(caption);
    tabla.style.border = '1px solid black'
    tabla.style.borderCollapse = 'collapse'
    let numerosdelcarton = generarNumerosCarton()
    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr')
        for (let j = 0; j < 9; j++){
            const celda = document.createElement('td')
            celda.textContent = numerosdelcarton[j][i]
            fila.appendChild(celda)
        }
        tabla.appendChild(fila)
    }
    cartones.appendChild(tabla)
    modificarEstilosCarton(tabla);
    if(carton == 6){
        carton = 1
        serie++
        columnaserie = columnaserie2
        numeroscolumna = numeroscolumna2
    }
    else{
        carton++
    }
}

botoncarton.addEventListener('click', (crearCarton))
/*
function generarNumerosCarton(){
    let correcciontresceros = false;
    let columnaseriegrandes = null;
    let correcciontotal = 0;
    let espaciosdobles = [];
    let correcciondosceros = 0;
    let columnasSeleccionadas = new Set();

    for (let t = 0; t < columnaserie.length; t++){
        correcciontotal = Number(correcciontotal) + Number([Object.values(columnaserie[t])])
    }
    if(correcciontotal <= 9){
        columnaseriegrandes = columnaserie.filter(col => Number([Object.values(col)]) > 1);
        console.log(columnaseriegrandes);
        correcciondosceros = columnaseriegrandes.length;
    }
    else if(correcciontotal <= 12){
        if(columnaserie[0][Object.keys(columnaserie[0])[0]] == 3){
            correcciontresceros = true;
        }
    }
    
    if(correcciontresceros){
        espaciosdobles.push(0);
        columnasSeleccionadas.add(0);
        correcciondosceros--;
    }

    while(espaciosdobles.length < 3){
        let indice, clave;
        if(correcciondosceros > 0){
            do {
                indice = getRandomInt(columnaseriegrandes.length);
                clave = Object.keys(columnaseriegrandes[indice])[0];
            } while(columnasSeleccionadas.has(Number(clave)));
            
            espaciosdobles.push(Number(clave));
            columnasSeleccionadas.add(Number(clave));
            correcciondosceros--;
        } else {
            do {
                indice = getRandomInt(columnaserie.length);
                clave = Object.keys(columnaserie[indice])[0];
            } while(columnasSeleccionadas.has(Number(clave)));
            
            espaciosdobles.push(Number(clave));
            columnasSeleccionadas.add(Number(clave));
        }
    }

    console.log("Columnas seleccionadas para espacios dobles:", espaciosdobles);

    // Decrementar los valores en columnaserie
    for(let espacio of espaciosdobles){
        let indice = columnaserie.findIndex(col => Number(Object.keys(col)[0]) === espacio);
        if(indice !== -1){
            columnaserie[indice][Object.keys(columnaserie[indice])[0]]--;
        }
    }

    console.log("columnaserie después de decrementar:", columnaserie);

    // Eliminar columnas con valor 0
    for (let n = columnaserie.length - 1; n >= 0; n--){
        if (Object.values(columnaserie[n])[0] == 0){
            columnaserie.splice(n, 1);
        }
    }

    let numerosaleatorios = Array(9).fill().map(() => []);
    for (let columna = 0; columna <= 8; columna++){
        let aleat = getRandomInt(numeroscolumna[columna].length);
        let celda = numeroscolumna[columna][aleat];
        numerosaleatorios[columna].push(celda);
        numeroscolumna[columna].splice(aleat, 1);
        
        if(!espaciosdobles.includes(columna)){
            aleat = getRandomInt(numeroscolumna[columna].length);
            celda = numeroscolumna[columna][aleat];
            numerosaleatorios[columna].push(celda);
            numeroscolumna[columna].splice(aleat, 1);
        } else {
            numerosaleatorios[columna].push(0);
        }
        numerosaleatorios[columna].push(0);
    }
    return numerosaleatorios;
}
*/
function generarNumerosCarton(){
    let correcciontresceros = false
    let columnaseriegrandes = null
    let correcciontotal = 0
    let dobleespacio1 = -1
    let dobleespacio2 = -1
    let dobleespacio3 = -1
    let correcciondosceros = 0
    let clave

    for (let t = 0; t < columnaserie.length; t++){
        correcciontotal = Number(correcciontotal) + Number([Object.values(columnaserie[t])])
    }
    if(correcciontotal <= 9){
        columnaseriegrandes = columnaserie.filter(columnaserie => Number([Object.values(columnaserie)]) > 1)
        console.log(columnaseriegrandes)
        correcciondosceros = columnaseriegrandes.length
    }
    else if(correcciontotal <= 12){
        if(columnaserie[0][Object.keys(columnaserie[0])[0]] == 3){
            correcciontresceros = true
        }
    }
    
    if(correcciontresceros == true){
        dobleespacio1 = 0
        correcciontresceros = false
    }

    if(correcciondosceros > 0){
        dobleespacio1 = getRandomInt(columnaseriegrandes.length)
        clave = Object.keys(columnaseriegrandes[dobleespacio1])[0];
        dobleespacio1 = columnaserie.findIndex(col => Object.keys(col)[0] === clave);
        correcciondosceros--
    }
    else{
        dobleespacio1 = getRandomInt(columnaserie.length)
    }
    if(correcciondosceros > 0){
        do{
            dobleespacio2 = getRandomInt(columnaseriegrandes.length)
        }while(dobleespacio2 == dobleespacio1)
        clave = Object.keys(columnaseriegrandes[dobleespacio2])[0];
        dobleespacio2 = columnaserie.findIndex(col => Object.keys(col)[0] === clave);
        correcciondosceros--
    }
    else{
        do{
            dobleespacio2 = getRandomInt(columnaserie.length)
        }while(dobleespacio2 == dobleespacio1)
    }
    if(correcciondosceros > 0){
        do{
            dobleespacio3 = getRandomInt(columnaseriegrandes.length)
        }while(dobleespacio3 == dobleespacio1 || dobleespacio3 == dobleespacio2)
        clave = Object.keys(columnaseriegrandes[dobleespacio3])[0];
        dobleespacio3 = columnaserie.findIndex(col => Object.keys(col)[0] === clave);
        correcciondosceros--
    }
    else{
        do{
            dobleespacio3 = getRandomInt(columnaserie.length)
        }while(dobleespacio3 == dobleespacio1 || dobleespacio3 == dobleespacio2)
    }
    // Vaya lio.. Esto accede mediante la única clave al valor correspondiente a dicha clave del elemento enésimo
    // del arreglo o array
    columnaserie[dobleespacio1][Object.keys(columnaserie[dobleespacio1])[0]]--;
    columnaserie[dobleespacio2][Object.keys(columnaserie[dobleespacio2])[0]]--;
    columnaserie[dobleespacio3][Object.keys(columnaserie[dobleespacio3])[0]]--;
    
    console.log(dobleespacio1+","+dobleespacio2+","+dobleespacio3)
    console.log(columnaserie)

    // Por el contrario esto asigna dicha clave a una variable. La clave guarda la información de la columna, 
    // que luego usaremos para saber si meter dos datos o no.
    dobleespacio1 = Number(Object.keys(columnaserie[dobleespacio1])[0]);
    dobleespacio2 = Number(Object.keys(columnaserie[dobleespacio2])[0]);
    dobleespacio3 = Number(Object.keys(columnaserie[dobleespacio3])[0]);

    for (let n=columnaserie.length-1; n>=0; n--){
        if (Object.values(columnaserie[n])[0] == 0){
            columnaserie.splice(n,1)
        }
    }
    let numerosaleatorios = [[],[],[],[],[],[],[],[],[]]
    for (let columna = 0; columna<=8; columna++){
        let aleat = getRandomInt(numeroscolumna[columna].length);
        let celda = numeroscolumna[columna][aleat]
        numerosaleatorios[columna].push(celda)
        numeroscolumna[columna].splice(aleat,1)
        if(columna != dobleespacio1 && columna != dobleespacio2 && columna != dobleespacio3){
            let aleat = getRandomInt(numeroscolumna[columna].length);
            let celda = numeroscolumna[columna][aleat]
            numerosaleatorios[columna].push(celda)
            numeroscolumna[columna].splice(aleat,1)
        }
        else{
            numerosaleatorios[columna].push(0)
        }
        numerosaleatorios[columna].push(0)
    }
    return numerosaleatorios
}

function modificarEstilosCarton(tabla) {
    tabla.style.borderCollapse = 'collapse';
    tabla.style.border = '7px solid #FFA500';
    tabla.style.borderRadius = '10px';
    tabla.style.margin = '10px';
    tabla.style.backgroundColor = '#f0f0f0';
    tabla.style.padding = '10px';
  
    const celdas = tabla.getElementsByTagName('td');
    for (let celda of celdas) {
      celda.style.width = '40px';
      celda.style.height = '40px';
      celda.style.textAlign = 'center';
      celda.style.verticalAlign = 'middle';
      celda.style.fontWeight = 'bold';
      celda.style.fontSize = '28px';
      celda.style.color = '#333';
      celda.style.backgroundColor = celda.textContent ? '#fff' : '#ddd';
      celda.style.border = '1px solid #FF8500';
      celda.style.borderRadius = '2px';
      celda.style.transition = 'all 0.3s ease';
      celda.style.cursor = celda.textContent ? 'pointer' : 'default';
      celda.style.color = '#FF8500';
  
      if (celda.textContent) {
        celda.addEventListener('mouseover', () => {
          celda.style.backgroundColor = '#ffeb3b';
          celda.style.transform = 'scale(1.1)';
          celda.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';
        });
  
        celda.addEventListener('mouseout', () => {
          celda.style.backgroundColor = '#fff';
          celda.style.transform = 'scale(1)';
          celda.style.boxShadow = 'none';
        });
  
        celda.addEventListener('click', () => {
          celda.style.backgroundColor = celda.style.backgroundColor === 'rgb(76, 175, 80)' ? '#fff' : '#4CAF50';
        });
      }
    }
  
    const caption = tabla.querySelector('caption');
    caption.style.captionSide = 'top';
    caption.style.marginBottom = '10px';
    caption.style.fontWeight = 'bold';
    caption.style.fontSize = '16px';
    caption.style.color = '#333';
    caption.style.textTransform = 'uppercase';
    caption.style.letterSpacing = '1px';
  }

function modificarEstilos(numero){
    numero--
    let id = String(numero).padStart(2, '0');
    let bola = document.querySelector("#a" + id);
    let brillo = document.querySelector("#b" + id);
    let sombra = document.querySelector("#c" + id);
    let texto = document.querySelector("#d" + id);

    // Cambiar el color de fondo a un gradiente más llamativo
    bola.style.background = 'radial-gradient(circle at 30% 30%, #f87171, #dc2626)';
    bola.style.borderColor = '#b91c1c';

    // Añadir una animación de pulsación
    bola.style.animation = 'pulse 1.5s infinite';

    // Aumentar el brillo
    brillo.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent)';

    // Cambiar el color del texto y añadir un efecto de brillo
    texto.style.color = '#fff';
    texto.style.textShadow = '0 0 10px rgba(255,255,255,0.8)';

    // Rotar la sombra para un efecto dinámico
    sombra.style.animation = 'rotateShadow 3s linear infinite';

    // Animar la bola de bingo
    const bingoBall = document.querySelector('#bingo-ball');
    bingoBall.classList.add('animate');
    setTimeout(() => {
        bingoBall.classList.remove('animate');
    }, 4000);

    // Añadir estilos CSS para las animaciones
    if (!document.querySelector('#bingoAnimations')) {
        const style = document.createElement('style');
        style.id = 'bingoAnimations';
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            @keyframes rotateShadow {
                from { transform: rotate(45deg); }
                to { transform: rotate(405deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

const sleep = function (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
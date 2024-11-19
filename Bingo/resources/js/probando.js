const numero = document.querySelector('#contador')
const boton = document.querySelector('#botonjugar')
const boton2 = document.querySelector('#botonjugar2')
const botoncarton = document.querySelector('#botoncarton')
const botonserie = document.querySelector('#botonserie')
let divanexar = document.querySelector('#botonsitos2')
let jugable = true
let juegovalido = 0

let todosloscartones = []

let modoviejas = false

let lineasmaximas = 3
let bingosmaximos = 1
let findeljuego = true

let primerawait = 4300 //--> 900 \\ 6030 y 2970 6030+2970 = 9000
let segundoawait = 2200   //-->550 \\ 3700 y 1800          = 5500

let cartonescantaronlinea = []
let cartonescantaronbingo = []

let cuentanumeros = [0,0,0]
let cuentanulos = [0,0,0]

let arraynumerosglobal

let serie = 1
let carton = 1
let columnaserie = [
    {0: 3},
    {1: 2},     // 1:1
    {2: 2},   // 2:1
    {3: 2},
    {4: 2},  // 4:2
    {5: 2},  // 5:2
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


//!console.log(numeroscolumna2)
//!console.log(columnaserie2)

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
    juegovalido = juegovalido + 6
})
boton.addEventListener('click', async() => {

    if(juegovalido<2){
        alert("Con esto no podemos jugar, genera cartones o series")
    }
    else{
    if(jugable == true){
        jugable = false
        findeljuego = false
    const imagenrueda = document.querySelector('#activarrueda')
    imagenrueda.style.backgroundImage = "url('../imagenes/bingoeditado.png')"

    botoncarton.style.display = 'none';
    botonserie.style.display = 'none';

    const botonReiniciar = document.createElement('button');
    botonReiniciar.textContent = 'Reiniciar';
    botonReiniciar.id = 'botonreiniciar';
    botonReiniciar.className = 'w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50';
    //botonReiniciar.addEventListener('click', reiniciarJuego);
    definirBotonReiniciar(botonReiniciar);
    divanexar.appendChild(botonReiniciar);

    let arraynumeros = []
    for (let elemento = 1; elemento <=90; elemento++){
        arraynumeros.push(elemento)
    }
    while (arraynumeros.length>0 && findeljuego == false){
        imagenrueda.style.backgroundImage = "url('../imagenes/bingoeditado3.png')"
        await sleep(primerawait)
        if(findeljuego == false){
        let randomi = getRandomInt(arraynumeros.length)
        numero.textContent = arraynumeros[randomi]
        modificarEstilos(arraynumeros[randomi])
        modificarEstilosCeldaCarton(arraynumeros[randomi])
        hablarNumero(arraynumeros[randomi])
        arraynumeros.splice(randomi,1)
        comprobar(arraynumeros)
        await sleep(segundoawait)
        }
    }
    }
    }
})

boton2.addEventListener('click', async() => {
    if(juegovalido<2){
        alert("Con esto no podemos jugar, genera cartones o series")
    }
    else{
    if(jugable == true){
        jugable = false
        findeljuego = false
    const imagenrueda = document.querySelector('#activarrueda')
    imagenrueda.style.backgroundImage = "url('../imagenes/bingoeditado3.png')"

    botoncarton.style.display = 'none';
    botonserie.style.display = 'none';

    const botonReiniciar = document.createElement('button');
    botonReiniciar.textContent = 'Reiniciar';
    botonReiniciar.id = 'botonreiniciar';
    botonReiniciar.className = 'w-auto sm:w-auto px-6 py-2 sm:px-6 sm:py-3 md:px-4 md:py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50';
    //botonReiniciar.addEventListener('click', reiniciarJuego);
    definirBotonReiniciar(botonReiniciar)
    divanexar.appendChild(botonReiniciar);

    const botonComprobar = document.createElement('button');
    botonComprobar.textContent = 'Comprobar';
    botonComprobar.id = 'botonComprobar';
    botonComprobar.className = 'w-auto sm:w-auto px-2 py-2 sm:px-2 sm:py-3 md:px-4 md:py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50';
    definirBotonComprobar(botonComprobar);
    //botonComprobar.addEventListener('click', reiniciarJuego);
    divanexar.appendChild(botonComprobar);

    let arraynumeros = []
    for (let elemento = 1; elemento <=90; elemento++){
        arraynumeros.push(elemento)
    }
    imprimirDiv(modoviejas)
    while (arraynumeros.length>0 && findeljuego == false){
        //imagenrueda.style.backgroundImage = "url('../imagenes/bingoeditado4.png')"
        await sleep(primerawait)
        if(findeljuego == false){
        let randomi = getRandomInt(arraynumeros.length)
        numero.textContent = arraynumeros[randomi]
        modificarEstilos(arraynumeros[randomi])
        //modificarEstilosCeldaCarton(arraynumeros[randomi])
        hablarNumero(arraynumeros[randomi])
        arraynumeros.splice(randomi,1)
        arraynumerosglobal = arraynumeros
        //comprobar(arraynumeros)
        await sleep(segundoawait)
        }
    }
    }
    }
})

function imprimirDiv(modoviejas) {

    const contenidoDiv = document.querySelector('#cartones').innerHTML

    const ventanaImpresion = window.open('', '', 'height=500, width=500');

    ventanaImpresion.document.open();
    if(modoviejas){
    ventanaImpresion.document.write(`

        <html>

        <head>

            <title>Imprimir Cartones</title>
             <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: #333; }
        table {
            page-break-inside: avoid;
            background-color: #f0f0f0; /* Color de fondo de la tabla */
            font-size: 54px;
            width: 100%;
            height: 26.5%;
            margin: 10px; /* Margen de la tabla */
            border-collapse: collapse; /* Combina los bordes de las celdas */
            border: 7px solid #FFA500; /* Bordes de la tabla */
            border-radius: 10px; /* Bordes redondeados de la tabla */
            padding: 10px; /* Espaciado interno de la tabla */
        }
        th, td {
            page-break-inside: avoid;
            font-size: 54px !important;
            border: 4px solid !important; /* Bordes de las celdas */
        }
        caption {
            font-weight: bold !important;
            font-size: 20px !important;
            color: #ffffff !important;
            text-transform: uppercase !important;
            letter-spacing: 2px !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1) !important;
            background-color: #FFA500 !important;
            padding: 10px 16px !important;
            border-radius: 5px 5px 0 0 !important;
            box-shadow: 0 2px 4px rgba(255, 0, 0, 0.5) !important;
        }
            </style>
        </head>

        <body>

            <h1>Cartones:</h1>

            ${contenidoDiv}

        </body>

        </html>

    `);
    }
    else{
        ventanaImpresion.document.write(`

            <html>

            <head>

                <title>Imprimir Cartones</title>
                 <style>

                            body { font-family: Arial, sans-serif; }

                            h1 { color: #333; }
                            table {page-break-inside: avoid;border-collapse: collapse;} /* Combina los bordes de las celdas */
                            th, td {
                            page-break-inside: avoid;
                    border: 2px solid; /* Bordes de las celdas */
                }
                </style>
            </head>

            <body>

                <h1>Cartones:</h1>

                ${contenidoDiv}

            </body>

            </html>

        `);
    }
    ventanaImpresion.document.close();

    ventanaImpresion.print();

}
function hablarNumero(numero) {

    const utterance = new SpeechSynthesisUtterance("El "+numero.toString()); // Convertir el número a string
    const utterance2 = new SpeechSynthesisUtterance(Math.floor(numero/10).toString());
    const utterance3 = new SpeechSynthesisUtterance((numero%10).toString());
    const voices = speechSynthesis.getVoices();

    //console.log(voices)

    // Puedes elegir una voz específica si lo deseas

    const selectedVoice = voices.find(voice => voice.name === "Microsoft Helena - Spanish (Spain)"); // Cambia el nombre según la voz que desees

    if (selectedVoice) {

        utterance.voice = selectedVoice;
        utterance2.voice = selectedVoice;
        utterance3.voice = selectedVoice;

    }


    speechSynthesis.speak(utterance);
    if(numero>9){
    setTimeout(() => {
    speechSynthesis.speak(utterance2);
    }, 1400);
    }
    setTimeout(() => {
        speechSynthesis.speak(utterance3);
        }, 2000);
}

function comprobarcante(){
    let idcarton = prompt("Introduce el cartón que ha cantado con el formato s2c5")
    let lineaobingo = prompt("Introduce L para comprobar si tiene Línea o B para comprobar el bingo")
    const cartones = document.querySelectorAll('table');
    let uncarton
    let idcorrecta
    let contador = [5,5,5]
    todosloscartones.forEach((cart,indc) => {
        if(cartones[indc].id == idcarton){
            uncarton = cartones[indc].id
            idcorrecta = indc
        }
    });
    if(uncarton == undefined){
        alert("No has seleccionado cartón válido")
    }
    else{
        //alert(uncarton)
    todosloscartones.forEach((cartn,indx) => {
        if(idcorrecta==indx){
            //alert("entra2")
            contador = [5,5,5]
            cartn.forEach((fila,i) => {
                fila.forEach((num,j) => {
                    arraynumerosglobal.forEach(numerosalido => {
                    if(num == numerosalido){
                        contador[j]--
                    }
                });
            })
        });
        }
    });

        if((contador[0] == 5 || contador[1] == 5 || contador[2] == 5) && lineaobingo == 'L'){
            let lineaganadora
            contador.forEach((element,linea) => {
                if(element == 5){
                    lineaganadora = linea+1
                }
            });
            let cantarile = true
            cartonescantaronlinea.forEach(hacantao => {
                if(hacantao == uncarton){
                    cantarile = false
                }
            });
            if(cantarile == true && lineasmaximas>0){
                alert("El carton "+uncarton.toUpperCase()+" ha cantado Linea en la línea "+lineaganadora) //hacer que tarde
                cartonescantaronlinea.push(uncarton)
                lineasmaximas--
            }
            else if(cantarile == false){
                alert("Ese cartón Ya ha cantado línea")
            }
            else if(lineasmaximas<=0){
                alert("Ya no se pueden cantar más líneas")
            }

        }
        else if(lineaobingo == 'L'){
            alert("No tiene línea")
        }

        if(contador[0] == 5 && contador[1] == 5 && contador[2] == 5 && lineaobingo == 'B'){
            let cantarile = true
            cartonescantaronbingo.forEach(hacantao => {
                if(hacantao == uncarton){
                    cantarile = false
                }
            });
            if(cantarile == true && bingosmaximos>0){
                alert("El carton"+uncarton.toUpperCase()+" ha cantado Bingo") //hacer que tarde
                cartonescantaronbingo.push(uncarton)
                bingosmaximos--
            }
            else if(cantarile == false){
                alert("Ese cartón Ya ha cantado Bingo")
            }
            else if(bingosmaximos<=0){
                alert("Ya no se pueden cantar más Bingos")
            }
        }
        else if(lineaobingo == 'B'){
            alert("No tiene bingo")
        }

        if(lineaobingo != 'L' && lineaobingo != 'B'){
            alert("No se ha especificado correctamente qué se ha de buscar")
        }

        if(bingosmaximos <= 0){
            alert("FIN DEL JUEGO")
            findeljuego = true
        }
        }
    }

function definirBotonComprobar(boton){
    boton.addEventListener('click', () => {
        comprobarcante()
    })
}
function definirBotonReiniciar(boton){
    boton.addEventListener('click', () => {
        // Reset all game variables
        findeljuego = true;
        jugable = true;
        juegovalido = 0;
        todosloscartones = [];
        lineasmaximas = 3;
        bingosmaximos = 1;
        cartonescantaronlinea = [];
        cartonescantaronbingo = [];
        cuentanumeros = [0, 0, 0];
        cuentanulos = [0, 0, 0];
        serie = 1;
        carton = 1;
        columnaserie = JSON.parse(JSON.stringify(columnaserie2));
        numeroscolumna = JSON.parse(JSON.stringify(numeroscolumna2));

        // Clear the bingo board
        const cartones = document.querySelector('#cartones');
        if (cartones) {
            cartones.innerHTML = '';
        }

        // Reset the number display
        const numero = document.querySelector('#contador');
        if (numero) {
            numero.textContent = '0';
        }

        // Reset the wheel image
        const imagenrueda = document.querySelector('#activarrueda');
        if (imagenrueda) {
            imagenrueda.style.backgroundImage = '';
        }

        // Show "generar carton" and "generar serie" buttons again
        const botoncarton = document.querySelector('#botoncarton');
        const botonserie = document.querySelector('#botonserie');
        if (botoncarton) botoncarton.style.display = '';
        if (botonserie) botonserie.style.display = '';

        // Remove "Reiniciar" and "Comprobar" buttons
        const botonReiniciar = document.querySelector('#botonreiniciar');
        const botonComprobar = document.querySelector('#botonComprobar');
        if (botonReiniciar) botonReiniciar.remove();
        if (botonComprobar) botonComprobar.remove();

        // Reset all cells in existing bingo cards
        const celdas = document.querySelectorAll('#cartones td');
        celdas.forEach(celda => {
            if(celda.textContent){
                celda.style.backgroundColor = '#fff';
            }
            else{
                celda.style.backgroundColor = '#999';
                celda.style.backgroundImage = "url('../imagenes/bolilleroedited5.png')"
            }
            celda.style.color = '#FF8500';
        });

        // Reset all bingo balls
        for (let i = 0; i <= 89; i++) {
            let id = String(i).padStart(2, '0');
            let bola = document.querySelector("#a" + id);
            let brillo = document.querySelector("#b" + id);
            let sombra = document.querySelector("#c" + id);
            let texto = document.querySelector("#d" + id);

            if (bola) bola.style.background = '';
            if (bola) bola.style.borderColor = '';
            if (bola) bola.style.animation = '';
            if (brillo) brillo.style.background = '';
            if (texto) texto.style.color = '';
            if (texto) texto.style.textShadow = '';
            if (sombra) sombra.style.animation = '';
        }

        console.log('Juego reiniciado');
    });
}


function comprobar(arraynumeros){
    let lineasrestar = 0
    let bingosrestar = 0
    todosloscartones.forEach((uncarton,cartonind) => {
        const cartones = document.querySelectorAll('table');
        let contador = [5,5,5]
        uncarton.forEach((fila,i) => {
            fila.forEach((num,j) => {
                arraynumeros.forEach(numerosalido => {
                    if(num == numerosalido){
                        contador[j]--
                    }
                });
            })
        });

        if(contador[0] == 5 || contador[1] == 5 || contador[2] == 5){
            let lineaganadora
            contador.forEach((element,linea) => {
                if(element == 5){
                    lineaganadora = linea+1
                }
            });
            let cantarile = true
            cartonescantaronlinea.forEach(hacantao => {
                if(hacantao == cartones[cartonind].id){
                    cantarile = false
                }
            });
            if(cantarile == true && lineasmaximas>0){
                alert("El carton "+cartones[cartonind].id.toUpperCase()+" ha cantado Linea en la línea "+lineaganadora) //hacer que tarde
                cartonescantaronlinea.push(cartones[cartonind].id)
                lineasrestar++
                //lineasmaximas--
            }

        }

        if(contador[0] == 5 && contador[1] == 5 && contador[2] == 5){
            let cantarile = true
            cartonescantaronbingo.forEach(hacantao => {
                if(hacantao == cartones[cartonind].id){
                    cantarile = false
                }
            });
            if(cantarile == true && bingosmaximos>0){
                alert("El carton"+cartones[cartonind].id.toUpperCase()+" ha cantado Bingo") //hacer que tarde
                cartonescantaronbingo.push(cartones[cartonind].id)
                bingosrestar++
                //bingosmaximos--
            }

        }


    });
    lineasmaximas = lineasmaximas - lineasrestar
    bingosmaximos = bingosmaximos - bingosrestar
    if(bingosmaximos <= 0){
        alert("FIN DEL JUEGO")
        findeljuego = true
    }
}

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

    let numerosdelcarton3 = ordenarNumerosCarton(numerosdelcarton)
    console.log(""+numerosdelcarton3)
    let numerosdelcarton2
    let tiene5 = false
    let i = 0
    while(tiene5 == false){
        numerosdelcarton2 = [[],[],[],[],[],[],[],[],[]]
        numerosdelcarton3.forEach((fila,i) => {
            numerosdelcarton3[i].forEach((elemento,j) => {
                numerosdelcarton2[i].push(numerosdelcarton3[i][j])
            });

        });
        console.log(""+numerosdelcarton2)
        console.log(""+numerosdelcarton3)
        console.log("se llega")
        numerosdelcarton2 = decidirNulos(numerosdelcarton2)
        tiene5 = tiene5encada(numerosdelcarton2)
        console.log(tiene5)
        console.log(i+"hoeafphae")
        i++
    }


    numerosdelcarton2 = reemplazar0porcomas(numerosdelcarton2)

    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr')
        for (let j = 0; j < 9; j++){
            const celda = document.createElement('td')
            celda.textContent = numerosdelcarton2[j][i]
            fila.appendChild(celda)
        }
        tabla.appendChild(fila)
    }
    cartones.appendChild(tabla)
    modificarEstilosCarton(tabla);
    todosloscartones.push(numerosdelcarton2)
    if(carton == 6){
        carton = 1
        serie++
        columnaserie = JSON.parse(JSON.stringify(columnaserie2))
        numeroscolumna = JSON.parse(JSON.stringify(numeroscolumna2))
    }
    else{
        carton++
    }
}

botoncarton.addEventListener('click', () =>  {
    juegovalido++
    crearCarton()
})

function reemplazar0porcomas(numeroscarton){
    numeroscarton.forEach((columna,c) => {
        columna.forEach((fila,f) => {
            if(numeroscarton[c][f] == 0){
                numeroscarton[c][f] = ''
            }
        })
    });
    return numeroscarton
}

function ordenarNumerosCarton(numeroscarton){
    //!console.log(numeroscarton)
    for (const columna of numeroscarton){
        let columnafiltro = columna.filter(elemento => elemento > 0)
        if(columnafiltro.length == 2){
            if(columna[0]>columna[1]){
                let auxiliar = columna[0]
                columna[0] = columna[1]
                columna[1] = auxiliar
            }
        }
    }
    return numeroscarton
}


function decidirNulos(numeroscarton){
    let elementosporcolumna = [1,1,1,1,1,1,1,1,1]
    for (let k = 0; k<numeroscarton.length; k++){
        let nonulos
        nonulos = numeroscarton[k].filter(num => num != 0)
        elementosporcolumna[k] = nonulos.length
    }


    cuentanumeros = [0,0,0]
    cuentanulos = [0,0,0]
    let aleatorios = []
    let aleator

    //Columna 0


    if(elementosporcolumna[0] == 1){
        aleator = getRandomInt(3)
        numeroscarton[0] = cambiar0porX(numeroscarton[0], aleator)
    }
    else{
        aleator = getRandomInt(3)
        numeroscarton[0] = cambiar2porX(numeroscarton[0], aleator)
        if(aleator == 0){
            cambiarcorreccion(numeroscarton[0])
        }

    }
    aleatorios.push(aleator)


    //Columna 1
    let cercanas1 = elementosporcolumna[1] == 1 && elementosporcolumna[2] == 1 && elementosporcolumna[0] == 1
    let cercanas2 = elementosporcolumna[1] == 2 && elementosporcolumna[2] == 2 && elementosporcolumna[0] == 2

    if(cercanas1 || cercanas2){
        do{
        aleator = getRandomInt(3)
        }while(aleator == aleatorios[0])
    }
    else{
        aleator = getRandomInt(3)
    }
    aleatorios.push(aleator)

    if(elementosporcolumna[1] == 1){
        numeroscarton[1] = cambiar0porX(numeroscarton[1], aleator)
    }
    else{
        numeroscarton[1] = cambiar2porX(numeroscarton[1], aleator)
        if(aleator == 0){
            cambiarcorreccion(numeroscarton[1])
        }
    }

    //!console.log(cuentanumeros+"nums")
    //!console.log(cuentanulos+"nuls")

    //Columnas 2 a 7
    for (let columna = 2; columna<8; columna++){
        let cercanasi = elementosporcolumna[columna] == 1 && elementosporcolumna[columna-1] == 1 && elementosporcolumna[columna+1] == 1
        let cercanasj = elementosporcolumna[columna] == 2 && elementosporcolumna[columna-1] == 2 && elementosporcolumna[columna+1] == 2
        let numseguidos = true
        let nulosseguidos = true

        while((numseguidos || nulosseguidos)){


            numseguidos = false
            nulosseguidos = false
            if(cercanasi || cercanasj){
                do{
                aleator = getRandomInt(3)
                }while(aleator == aleatorios[columna-1])
            }
            else{
                aleator = getRandomInt(3)
            }

            if(elementosporcolumna[columna] == 1){
                numeroscarton[columna] = cambiar0porX(numeroscarton[columna], aleator)
            }
            else{
                numeroscarton[columna] = cambiar2porX(numeroscarton[columna], aleator)
                if(aleator == 0){
                    cambiarcorreccion(numeroscarton[columna])
                }
            }

            for (const elem of cuentanumeros){
                //!console.log(elem)
                if(elem == 3){
                    numseguidos = true
                }
            }
            for (const elem2 of cuentanulos){
                if(elem2 == 3){
                    nulosseguidos = true
                }
            }
            //!console.log("COLUMNA "+columna)
            //!console.log(cuentanumeros+"nums")
            //!console.log(cuentanulos+"nuls")
            //!console.log(numseguidos)
            //!console.log(nulosseguidos)
            //!console.log("Numeros"+numeroscarton[columna])

            if(numseguidos || nulosseguidos){
                //!console.log(numeroscarton[columna])
                if(elementosporcolumna[columna] == 1){
                    numeroscarton[columna] = cambiar0porX(numeroscarton[columna], aleator,true)
                    }
                    else{
                    numeroscarton[columna] = cambiar2porX(numeroscarton[columna], aleator,true)
                    if(aleator == 0){
                        cambiarcorreccion2(numeroscarton[columna])
                    }
                }
                //!console.log("DespuésDeCorregir"+numeroscarton[columna])
            }
            else{
                aleatorios.push(aleator)
                numeroscarton[columna-2].forEach((numero,indc) => {
                    if(numero == 0){
                        cuentanulos[indc]--
                    }
                    else{
                        cuentanumeros[indc]--
                    }
                });
            }
        }
    }

    //Columna8


    let numseguidos = true
    let nulosseguidos = true
    while((numseguidos || nulosseguidos)){
        numseguidos = false
        nulosseguidos = false
        aleator = getRandomInt(3)

        if(elementosporcolumna[8] == 1){
            numeroscarton[8] = cambiar0porX(numeroscarton[8], aleator)
        }
        else{
            numeroscarton[8] = cambiar2porX(numeroscarton[8], aleator)
            if(aleator == 0){
                cambiarcorreccion(numeroscarton[8])
            }
        }
        for (const elem of cuentanumeros){
            if(elem == 3){
                numseguidos = true
            }
        }
        for (const elem2 of cuentanulos){
            if(elem2 == 3){
                nulosseguidos = true
            }
        }
        if(numseguidos || nulosseguidos){

            if(elementosporcolumna[8] == 1){
                numeroscarton[8] = cambiar0porX(numeroscarton[8], aleator,true)
                }
                else{
                numeroscarton[8] = cambiar2porX(numeroscarton[8], aleator,true)
                if(aleator == 0){
                    cambiarcorreccion2(numeroscarton[8])
                }
            }
            //?console.log("DespuésDeCorregir"+numeroscarton[8])
        }
    }
    return numeroscarton
}

function cambiarcorreccion2(lacolumna){
    let auxiliar = lacolumna[0]
    lacolumna[0] = lacolumna[1]
    lacolumna[1] = auxiliar
}

function cambiarcorreccion(lacolumna){
    let auxiliar = lacolumna[1]
    lacolumna[1] = lacolumna[2]
    lacolumna[2] = auxiliar
}

function tiene5encada(numeroscarton) {
    console.log(numeroscarton)
    console.log("loquevadespues")
    let filas = [0, 0, 0];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        if (numeroscarton[i][j] != 0) {
          filas[j]++;
        }
      }
    }
    console.log("Números por fila:", filas);
    return filas[0] == 5 && filas[1] == 5 && filas[2] == 5
    //return true

}

function cambiar2porX(lacolumna, cambio, deshacer=false){

    if (cambio != 2){
        let auxiliar = lacolumna[cambio]
        lacolumna[cambio] = lacolumna[2]
        lacolumna[2] = auxiliar
    }
    if(!deshacer){
    for (let i = 0; i<3; i++){
        if(i == cambio){
            cuentanulos[i]++
        }
        else{
            cuentanumeros[i]++
        }
    }
    }
    else{
        for (let j = 0; j<3; j++){
            if(j == cambio){
                cuentanulos[j]--
            }
            else{
                cuentanumeros[j]--
            }
        }
    }
    return lacolumna
}

function cambiar0porX(lacolumna, cambio,deshacer=false){
    if (cambio != 0){
        let auxiliar = lacolumna[cambio]
        lacolumna[cambio] = lacolumna[0]
        lacolumna[0] = auxiliar
    }
    if(!deshacer){
    for (let i = 0; i<3; i++){
        if(i == cambio){
            cuentanumeros[i]++
        }
        else{
            cuentanulos[i]++
        }
    }
    }
    else{
        for (let j = 0; j<3; j++){
            if(j == cambio){
                cuentanumeros[j]--
            }
            else{
                cuentanulos[j]--
            }
        }
    }
    return lacolumna
}

function generarNumerosCarton(){
    let correcciontresceros = false
    let columnaseriegrandes = null
    let correcciontotal = 0
    let dobleespacio1 = -1
    let dobleespacio2 = -1
    let dobleespacio3 = -1
    let correcciondosceros = 0
    let clave = -1
    let clave1 = -1
    let clave2 = -1
    let clave3 = -1
    let clave1modificada = false
    let clave2modificada = false

    for (let t = 0; t < columnaserie.length; t++){
        correcciontotal = Number(correcciontotal) + Number([Object.values(columnaserie[t])])
    }
    if(correcciontotal <= 9){
        columnaseriegrandes = columnaserie.filter(columnaserie => Number([Object.values(columnaserie)]) > 1)
        //!console.log(columnaseriegrandes)
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
        clave1 = columnaserie.findIndex(col => Object.keys(col)[0] === clave);
        //!console.log(clave1+"0")
        correcciondosceros--
        //!console.log(clave1+"1")
        clave1modificada = true
    }
    else{
        dobleespacio1 = getRandomInt(columnaserie.length)
        //!console.log(dobleespacio1)
    }
    //!console.log(clave1+"2")
    if(correcciondosceros > 0){
        do{
            dobleespacio2 = getRandomInt(columnaseriegrandes.length)
        }while(dobleespacio2 == dobleespacio1)
        clave = Object.keys(columnaseriegrandes[dobleespacio2])[0];
        clave2 = columnaserie.findIndex(col => Object.keys(col)[0] === clave);
        correcciondosceros--
        clave2modificada = true
    }
    else if(clave1modificada){
        do{
            dobleespacio2 = getRandomInt(columnaserie.length)
        }while(dobleespacio2 == clave1)
    }
    //CONDICIÓN SI YA NO ES 0 PEEEERO EL DE ANTES ERA MÁS QUE 1
    else{
        do{
            dobleespacio2 = getRandomInt(columnaserie.length)
        }while(dobleespacio2 == dobleespacio1)
    }
    //!console.log(clave1+"3")
    if(correcciondosceros > 0){
        do{
            dobleespacio3 = getRandomInt(columnaseriegrandes.length)
        }while(dobleespacio3 == dobleespacio1 || dobleespacio3 == dobleespacio2)
        clave = Object.keys(columnaseriegrandes[dobleespacio3])[0];
        clave3 = columnaserie.findIndex(col => Object.keys(col)[0] === clave);
        correcciondosceros--
    }
    else if(clave2modificada){
        do{
            dobleespacio3 = getRandomInt(columnaserie.length)
        }while(dobleespacio3 == clave1 || dobleespacio3 == clave2)
    }
    else if(clave1modificada){
        do{
            dobleespacio3 = getRandomInt(columnaserie.length)
        }while(dobleespacio3 == clave1 || dobleespacio3 == dobleespacio2)
    }
    else{
        do{
            dobleespacio3 = getRandomInt(columnaserie.length)
        }while(dobleespacio3 == dobleespacio1 || dobleespacio3 == dobleespacio2)
    }

    if(clave1 != -1){
        dobleespacio1 = clave1
    }
    if(clave2 != -1){
        dobleespacio2 = clave2
    }
    if(clave3 != -1){
        dobleespacio3 = clave3
    }

    //!console.log(clave1)
    // Vaya lio.. Esto accede mediante la única clave al valor correspondiente a dicha clave del elemento enésimo
    // del arreglo o array
    //!console.log(columnaserie[dobleespacio1][Object.keys(columnaserie[dobleespacio1])[0]])
    columnaserie[dobleespacio1][Object.keys(columnaserie[dobleespacio1])[0]]--;
    columnaserie[dobleespacio2][Object.keys(columnaserie[dobleespacio2])[0]]--;
    columnaserie[dobleespacio3][Object.keys(columnaserie[dobleespacio3])[0]]--;

    //!console.log(dobleespacio1+","+dobleespacio2+","+dobleespacio3)
    //!console.log(columnaserie)

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
      if(celda.textContent){
        celda.style.backgroundColor = '#fff';
    }
    else{
        celda.style.backgroundColor = '#ddd';
        celda.style.backgroundImage = "url('../imagenes/bolilleroedited5.png')";
        celda.style.backgroundSize = 'cover'; // O 'contain', según lo que necesites

        celda.style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita

        celda.style.backgroundPosition = 'center'; // Centra la imagen en la celda
    }
    celda.style.color = '#FF8500';
      celda.style.border = '1px solid #FF8500';
      celda.style.borderRadius = '2px';
      celda.style.transition = 'all 0.3s ease';
      celda.style.cursor = celda.textContent ? 'pointer' : 'default';
      celda.style.color = '#FF8500';

      /*if (celda.textContent) {
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
      }*/
    }

    const caption = tabla.querySelector('caption');
    caption.style.captionSide = 'top';
    caption.style.marginBottom = '0px';
    caption.style.fontWeight = 'bold';
    caption.style.fontSize = '20px';
    caption.style.color = '#ffffff';
    caption.style.textTransform = 'uppercase';
    caption.style.letterSpacing = '2px';
    caption.style.textShadow = '1px 1px 2px rgba(0,0,0,0.1)';
    caption.style.backgroundColor = '#FFA500';
    caption.style.padding = '1px 16px';
    caption.style.borderRadius = '5px 5px 0 0';
    caption.style.boxShadow = '0 2px 4px rgba(255,0,0,0.5)';
}

function modificarEstilosCeldaCarton(numero) {
    // Seleccionar todas las celdas de todos los cartones
    const celdas = document.querySelectorAll('#cartones td');

    celdas.forEach(celda => {
      if (celda.textContent == numero) {
        // Aplicar estilos para marcar la celda
        celda.style.backgroundColor = '#4CAF50';
        celda.style.color = '#fff';
        //celda.style.textDecoration = 'line-through';

        // Añadir una animación de resaltado
        celda.animate([
            { transform: 'rotate(-35deg) scale(1)', backgroundColor: '#4CAF50' },
            { transform: 'rotate(-17.5deg) scale(1.5)', backgroundColor: '#45a049' },
            { transform: 'rotate(0deg) scale(1)', backgroundColor: '#4CAF50' }
        ], {
          duration: 500,
          iterations: 1,
          easing: 'ease-out'
        });
      }
    });
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



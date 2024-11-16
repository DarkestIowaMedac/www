const numero = document.querySelector('#contador')
const boton = document.querySelector('#botonjugar')
const botoncarton = document.querySelector('#botoncarton')
const botonserie = document.querySelector('#botonserie')
let todosloscartones = []

let cuentanumeros = [0,0,0]
let cuentanulos = [0,0,0]

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
        modificarEstilosCeldaCarton(arraynumeros[randomi])
        arraynumeros.splice(randomi,1)
        await sleep(2970)
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
    crearCarton()


    //Lógica para crear Carton de nuevo si el cartón no es el adecuado. Reorganizar las funciones anteriores

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



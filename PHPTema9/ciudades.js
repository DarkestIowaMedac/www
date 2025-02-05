    let ciudadesDOM = document.querySelector('#lista-ciudades')
    let paisesDOM = document.querySelector('#paises')
    let insertarDOM = document.querySelector('#insertar')
    let ciudadesPais = []
    console.log(paisesDOM)

    async function obtenerCiudades(countryCode){
        ciudadesPais = []
        try{
            const response = await fetch(`./get_ciudades.php?countryCode=${countryCode}`);
            const data = await response.json();
            data.forEach(ciudad => {
                ciudadesPais.push(ciudad.Name)
            });
        }
        catch(error) {
            console.log('Error:', error);
        };
    }
    async function borrarCiudad(countrycode, ciudad){
        try{
            const response = await fetch(`./delete_ciudades.php?countryCode=${countrycode}&ciudadName=${ciudad}`)
            console.log(response)
        }
        catch(error) {
            console.log('Error:', error);
        };
    }
    async function insertarCiudad(countryCode, ciudadName){
        try{
            const response = await fetch(`./insert_ciudades.php?countryCode=${countryCode}&ciudadName=${ciudadName}`)
            console.log(response)
            }
        catch(error) {
            console.log('Error:', error);
        };
    }
    async function actualizarCiudad(countryCode, ciudadName, newCiudadName){
        try{
        const response = await fetch(`./update_ciudades.php?countryCode=${countryCode}&ciudadName=${ciudadName}&newCiudadName=${newCiudadName}`)
        console.log(response)
        }
        catch(error) {
            console.log('Error:', error);
        };
    }
    insertarDOM.addEventListener('click', async()=> {
        let paiscode = paisesDOM.value
        let i = ciudadesPais.length-1
        let nuevoNombre = prompt("Introduce el nombre para la nueva ciudad:", ciudadesPais[i]);
        if (nuevoNombre) {
            let opcion3Dom = document.createElement('li')
            let borrarBtn = document.createElement('button');
            borrarBtn.textContent = 'Borrar';
            borrarBtn.onclick = async() => {
                let ciudadAborrar = ciudadesPais[i]
                await borrarCiudad(paiscode,ciudadAborrar)
                ciudadesDOM.removeChild(opcion3Dom);
                ciudadesPais.splice(i,1)   
            };
            let editarBtn = document.createElement('button');
            editarBtn.textContent = 'Editar';
            editarBtn.onclick = async() => {
                let nombreciudad = ciudadesPais[i]
                let nuevoNombre = prompt("Introduce el nuevo nombre para la ciudad:", ciudadesPais[i]);
                if (nuevoNombre) {
                    opcion3Dom.textContent = nuevoNombre;
                    opcion3Dom.appendChild(editarBtn);
                    opcion3Dom.appendChild(borrarBtn);
                    ciudadesPais.splice(i, 1,nuevoNombre);
                    await actualizarCiudad(paiscode, nombreciudad, nuevoNombre)
                }
                
            };
            opcion3Dom.textContent = nuevoNombre;
            ciudadesDOM.appendChild(opcion3Dom);
            opcion3Dom.appendChild(editarBtn);
            opcion3Dom.appendChild(borrarBtn);
            ciudadesPais.push(nuevoNombre);
            console.log(ciudadesPais)
            await insertarCiudad(paiscode,nuevoNombre)
            
        }
    });

    paisesDOM.addEventListener('change', async()=> {
        let paiscode = paisesDOM.value
        await obtenerCiudades(paiscode)
        ciudadesDOM.replaceChildren()
        for(let i = 0; i<ciudadesPais.length; i++){
            let opcion2Dom = document.createElement('li');
            opcion2Dom.textContent = ciudadesPais[i];
            let borrarBtn = document.createElement('button');
            borrarBtn.textContent = 'Borrar';
            borrarBtn.onclick = async() => {
                let ciudadAborrar = ciudadesPais[i]
                await borrarCiudad(paiscode,ciudadAborrar)
                ciudadesDOM.removeChild(opcion2Dom);
                ciudadesPais.splice(i,1)
            };
            let editarBtn = document.createElement('button');
            editarBtn.textContent = 'Editar';
            editarBtn.onclick = async() => {
                let nombreciudad = ciudadesPais[i]
                let nuevoNombre = prompt("Introduce el nuevo nombre para la ciudad:", ciudadesPais[i]);
                if (nuevoNombre) {
                    opcion2Dom.textContent = nuevoNombre;
                    opcion2Dom.appendChild(editarBtn);
                    opcion2Dom.appendChild(borrarBtn);
                    ciudadesPais.splice(i, 1,nuevoNombre);
                    await actualizarCiudad(paiscode, nombreciudad, nuevoNombre)
                }
                
            };
            
            opcion2Dom.appendChild(editarBtn);
            opcion2Dom.appendChild(borrarBtn);
            ciudadesDOM.appendChild(opcion2Dom);

        }
    })
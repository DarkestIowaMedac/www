document.addEventListener('DOMContentLoaded', () => {
    const token = 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1';

    // Petición obtener con Axios
    axios.get('http://localhost:8090/servidorback/public/api/fichajes?idFichaje=2', {
        headers: {
            Authorization: token
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

    // Petición borrar con Axios
    axios.delete('http://localhost:8090/servidorback/public/api/borrarfichaje?idFichaje=6', {
        headers: {
            Authorization: token
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

    // Petición crear con Axios
    axios.post('http://localhost:8090/servidorback/public/api/fichar', {
        tipo: 0
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

    // Petición actualizar con Axios
    axios.put('http://localhost:8090/servidorback/public/api/actualizarfichaje?idFichaje=7&tipo=1', {}, {
        headers: {
            Authorization: token
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
});
document.addEventListener('DOMContentLoaded', () => {
    //Petición obtener con bearer token y get
    fetch('http://localhost:8090/servidorback/public/api/fichajes?idFichaje=2',{
        headers: {
            Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))

    //Petición borrar con bearer token y delete
    fetch('http://localhost:8090/servidorback/public/api/borrarfichaje?idFichaje=2',{
        method: "DELETE",
        headers: {
            Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))

    //Petición crear con bearer token y delete
    fetch('http://localhost:8090/servidorback/public/api/fichar',{
        method: "POST",
        body:JSON.stringify({
            tipo: 0
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))

    //Petición actualizazr con bearer token y delete
    fetch('http://localhost:8090/servidorback/public/api/actualizarfichaje?idFichaje=6&tipo=1',{
        method: "PUT",
        headers: {
            Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
})



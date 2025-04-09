document.addEventListener('DOMContentLoaded', () => {
    
    fetch('http://localhost:8090/practicandoExamen/public/api/transferencia',{
        method: "POST",
        body: JSON.stringify({
            idRecibidor: 19,
            cantidad: 20
            }),
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer 10|y69LfSSRCPfmD7dQb301bc7Armt7Dedbb2UdPuD9111d0cf4'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))

    // //Petición borrar con bearer token y delete
    // fetch('http://localhost:8090/servidorback/public/api/borrarfichaje?idFichaje=2',{
    //     method: "DELETE",
    //     headers: {
    //         Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))

    // //Petición crear con bearer token y delete
    // fetch('http://localhost:8090/servidorback/public/api/fichar',{
    //     method: "POST",
    //     body:JSON.stringify({
    //         tipo: 0
    //     }),
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))

    // //Petición actualizazr con bearer token y delete
    // fetch('http://localhost:8090/servidorback/public/api/actualizarfichaje?idFichaje=6&tipo=1',{
    //     method: "PUT",
    //     headers: {
    //         Authorization: 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
})



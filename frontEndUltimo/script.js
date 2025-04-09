document.addEventListener('DOMContentLoaded', () => {
    //Petición obtener todos
    fetch('http://localhost:8090/exmaenultimo/public/api/todos', {
        headers: {
            Authorization: 'Bearer 5|wl8Jdceu3c0diNjz93GmvmFYU7hBNeOukCF7cQmS4bd3d7cb' // Reemplaza con tu token
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    //petición realizar compra
    fetch('http://localhost:8090/examenultimo/public/api/compra', {
        method: "POST",
        body: JSON.stringify({
            idProducts: [30, 5] // Reemplaza con los IDs de los productos que deseas agregar
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 5|wl8Jdceu3c0diNjz93GmvmFYU7hBNeOukCF7cQmS4bd3d7cb" // Reemplaza con tu token
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    //Petición obtener
    fetch('http://localhost:8090/examenultimo/public/api/compra', {
        headers: {
            Authorization: 'Bearer 5|wl8Jdceu3c0diNjz93GmvmFYU7hBNeOukCF7cQmS4bd3d7cb' // Reemplaza con tu token
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    //Petición borrar compra
    fetch('http://localhost:8090/examenultimo/public/api/compra', {
        method: "DELETE",
        body: JSON.stringify({
            idProducts: [30, 5] // Reemplaza con los IDs de los productos que deseas eliminar
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer 5|wl8Jdceu3c0diNjz93GmvmFYU7hBNeOukCF7cQmS4bd3d7cb' // Reemplaza con tu token
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
})



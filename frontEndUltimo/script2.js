document.addEventListener('DOMContentLoaded', () => {
    const token = '{tu_token_de_autenticación}'; // Reemplaza con tu token

    // Petición obtener todos
    axios.get('http://localhost:8090/servidorback/public/api/todos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

    // Petición realizar compra
    axios.post('http://localhost:8090/servidorback/public/api/compra', {
        idProducts: [30, 5] // Reemplaza con los IDs de los productos que deseas agregar
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

    // Petición obtener carrito
    axios.get('http://localhost:8090/servidorback/public/api/compra', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

    // Petición borrar compra
    axios.delete('http://localhost:8090/servidorback/public/api/compra', {
        data: {
            idProducts: [30, 5] // Reemplaza con los IDs de los productos que deseas eliminar
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
});
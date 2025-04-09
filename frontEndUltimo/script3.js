document.addEventListener('DOMContentLoaded', () => {
    const token = 'Bearer {tu_token_de_autenticación}'; // Reemplaza con tu token

    // Función para hacer peticiones AJAX
    function ajaxRequest(method, url, data = null, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Authorization', token);
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const responseText = xhr.responseText;
                if (responseText) {
                    callback(null, JSON.parse(responseText));
                } else {
                    callback(null, {}); // Devuelve un objeto vacío si no hay respuesta
                }
            } else {
                callback(xhr.statusText);
            }
        };
        xhr.onerror = () => callback(xhr.statusText);
    }

    // Petición obtener todos los productos
    ajaxRequest('GET', 'http://localhost:8090/servidorback/public/api/todos', null, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    // Petición realizar compra
    ajaxRequest('POST', 'http://localhost:8090/servidorback/public/api/compra', { idProducts: [30, 5] }, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    // Petición obtener carrito
    ajaxRequest('GET', 'http://localhost:8090/servidorback/public/api/compra', null, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    // Petición borrar compra
    ajaxRequest('DELETE', 'http://localhost:8090/servidorback/public/api/compra', { idProducts: [30, 5] }, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });
});
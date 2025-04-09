document.addEventListener('DOMContentLoaded', () => {
    const token = 'Bearer 1|6Ua6JUxbaS1ZkvE2soFvamn8TYr9dmWxjFmZGoEhaa442da1';

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
                // Verifica si hay contenido en la respuesta
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

    // Petición obtener con AJAX
    ajaxRequest('GET', 'http://localhost:8090/servidorback/public/api/fichajes?idFichaje=2', null, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    // Petición borrar con AJAX
    ajaxRequest('DELETE', 'http://localhost:8090/servidorback/public/api/borrarfichaje?idFichaje=7', null, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    // Petición crear con AJAX
    ajaxRequest('POST', 'http://localhost:8090/servidorback/public/api/fichar', { tipo: 0 }, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    // Petición actualizar con AJAX
    ajaxRequest('PUT', 'http://localhost:8090/servidorback/public/api/actualizarfichaje?idFichaje=9&tipo=1', null, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });
});
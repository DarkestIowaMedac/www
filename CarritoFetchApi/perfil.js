document.addEventListener('DOMContentLoaded', () => {
    let productos = document.querySelector('#productos')
    fetch('http://localhost:8090/examenultimo/public/api/compra', {
        headers: {
            Authorization: 'Bearer 5|wl8Jdceu3c0diNjz93GmvmFYU7hBNeOukCF7cQmS4bd3d7cb' // Reemplaza con tu token
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let removerbtn = []
        data.forEach((producto,i) => {
            productos.innerHTML += `
            <li>
            <span>idKey: ${producto.id}</span>
            <span>idUser: ${producto.idUser}</span>
            <span>idProduct: ${producto.idProduct}</span>
            <button class="remover" value="${producto.idProduct}">Remover</button>
            </li>
            `

            //removerbtn.push(document.querySelector(`#remover${i}`)) 
            //console.log(removerbtn)
            //añadirEvento(removerbtn[i])
            
        });
        const botones = document.querySelectorAll('.remover')
        botones.forEach((boton) => {
            boton.addEventListener('click',(e)=>{
                console.log("ha")
                console.log(e.target.value)
                fetch('http://localhost:8090/examenultimo/public/api/compra', {
                    method: "DELETE",
                    body: JSON.stringify({
                        idProducts: [e.target.value] // Reemplaza con los IDs de los productos que deseas eliminar
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
        })
        //})
    })
    .catch(error => console.error('Error:', error));
})

// function añadirEvento(btn){
//     btn.addEventListener('click',()=>{
//         console.log("ha")
//     })
//     console.log("clickado")
// }
const templateCard = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const templateFooter = document.getElementById("template-footer").content;
const items = document.getElementById("items");
const cards = document.getElementById("cards");
const fragment = document.createDocumentFragment();
const footer = document.getElementById("footer");
const comprarbtn = document.getElementById("comprar")
let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});

comprarbtn.addEventListener('click', ()=>{
	ids = [];
	Object.values(carrito).forEach((producto) => {
		ids.push(producto.id)
	})
	ids.forEach((id) => {
		fetch('http://localhost:8090/examenultimo/public/api/compra', {
			method: "POST",
			body: JSON.stringify({
				idProducts: [id] // Reemplaza con los IDs de los productos que deseas agregar
			}),
			headers: {
				"Content-Type": "application/json",
				Authorization: 'Bearer 5|wl8Jdceu3c0diNjz93GmvmFYU7hBNeOukCF7cQmS4bd3d7cb' // Reemplaza con tu token
			}
		})
	})
	
	
})
items.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn-info")) {
		// console.log(carrito[e.target.dataset.id])
		const producto = carrito[e.target.dataset.id];
		producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
		carrito[e.target.dataset.id] = { ...producto };
		llenarCarrito();
	}
	if (e.target.classList.contains("btn-danger")) {
		const producto = carrito[e.target.dataset.id];
		producto.cantidad = 0;
		if (producto.cantidad === 0) {
			delete carrito[e.target.dataset.id];	
		} else {
			carrito[e.target.dataset.id] = { ...producto };
		}
		llenarCarrito();
	}
	e.stopPropagation();
});

const fetchData = async () => {
	try {
		const res = await fetch("http://localhost:8090/examenultimo/public/api/todos");
		const data = await res.json();
		pintarCards(data);
	} catch (err) {
		console.log(err);
	}
};

const pintarCards = (data) => {
	for (let producto of data) {
		templateCard.querySelector("h5").textContent = producto.title;
		templateCard.querySelector("p").textContent = producto.precio;
		templateCard.querySelector("img").setAttribute("src", producto.thumb);
		templateCard.querySelector(".btn-dark").dataset.id = producto.id;
		const clone = templateCard.cloneNode(true);
		fragment.appendChild(clone);
	}
	cards.appendChild(fragment);
};

cards.addEventListener("click", (e) => {
	addCarrito(e);
});

const addCarrito = (e) => {
	if (e.target.classList.contains("btn-dark")) {
		setCarrito(e.target.parentElement);
	}
	e.stopPropagation();
};

const setCarrito = (objeto) => {
	const producto = {
		id: objeto.querySelector(".btn-dark").dataset.id,
		title: objeto.querySelector("h5").textContent,
		precio: objeto.querySelector("p").textContent,
		cantidad: 1,
	};

	if (carrito.hasOwnProperty(producto.id)) {
		producto.cantidad = carrito[producto.id].cantidad + 1;
	}
	carrito[producto.id] = { ...producto };
	llenarCarrito();
};

const llenarCarrito = () => {
	items.innerHTML = "";
	console.log(carrito)
	Object.values(carrito).forEach((producto) => {
		templateCarrito.querySelector("th").textContent = producto.id;
		templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
		templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
		templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
		templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
		templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio;

		const clone2 = templateCarrito.cloneNode(true);
		fragment.appendChild(clone2);
		
	});
	items.appendChild(fragment);
	pintarFooter();
};

const pintarFooter = () => {
	footer.innerHTML = "";
	if (Object.keys(carrito).length === 0) {
		footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
		return;
	}

	const totalCantidadProductos = Object.values(carrito).reduce(
		(acumulador, { cantidad }) => acumulador + cantidad,
		0
	);
	const totalPrecioProductos = Object.values(carrito).reduce(
		(acumulador, { precio, cantidad }) => acumulador + cantidad * precio,
		0
	);

	templateFooter.querySelectorAll("td")[0].textContent = totalCantidadProductos;
	// templateFooter.querySelector('.btn-danger').textContent = 0
	templateFooter.querySelector("span").textContent = totalPrecioProductos;

	const clone3 = templateFooter.cloneNode(true);
	fragment.appendChild(clone3);
	footer.appendChild(fragment);

	const botonVaciarCarrito = document.getElementById("vaciar-carrito");
	botonVaciarCarrito.addEventListener("click", () => {
		carrito = {};
		llenarCarrito();
	});
};

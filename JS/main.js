/*
objetos *
array *
funciones anteriores de preentrega1*
funciones de orden superior*

*/
// Productos de ejemplo

const productos = [
    {id: 1, nombre: "Cine1", categoria: {nombre: "Pinturas cine"}, precio: 40000},
    {id: 2, nombre: "Cine2", categoria: {nombre: "Pinturas cine"}, precio: 40000},
    {id: 3, nombre: "Cine3", categoria: {nombre: "Pinturas cine"}, precio: 40000},
    {id: 4, nombre: "Arte1", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 5, nombre: "Arte2", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 6, nombre: "Arte3", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 7, nombre: "Arte4", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 8, nombre: "Arte5", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 9, nombre: "Arte6", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 10, nombre: "Arte7", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 11, nombre: "Arte8", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 12, nombre: "Arte9", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 13, nombre: "Arte10", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 14, nombre: "Arte11", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 15, nombre: "Arte12", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 16, nombre: "Arte13", categoria: {nombre: "Pinturas random"}, precio: 35000},
    {id: 17, nombre: "Arte14", categoria: {nombre: "Pinturas random"}, precio: 35000},
];

// Función para obtener productos por categoría
function obtenerProductosPorCategoria(categoriaNombre) {
    // Eliminar espacios y convertir todo a minúsculas para hacer la comparación
    const categoriaNombreSinEspacios = categoriaNombre.replace(/\s+/g, '').toLowerCase();

    return productos.filter(producto =>
        producto.categoria.nombre.replace(/\s+/g, '').toLowerCase() === categoriaNombreSinEspacios
    );
}

// Función para que el usuario elija un producto válido
function obtenerProductoQueDeseaComprar() {
    // Lista de productos válidos
    const productosValidos = ["Cine1", "Cine2", "Cine3", "Arte1", "Arte2", "Arte3", "Arte4", "Arte5", "Arte6", "Arte7", "Arte8", "Arte9", "Arte10", "Arte11", "Arte12", "Arte13", "Arte14"];

    // Preguntar al usuario qué producto desea comprar
    let productoQueDeseaComprar = prompt("Ingrese el producto que desea adquirir (mencione el nombre, ej. Cine1 o Arte2):").toLowerCase();

    // Eliminar espacios adicionales y comparar con la lista de productos válidos
    let productoValido = productosValidos.find(p => p.toLowerCase().replace(/\s+/g, '') === productoQueDeseaComprar.replace(/\s+/g, ''));

    if (productoValido) {
        return productoValido;  // Retorna el nombre del producto si es válido
    } else {
        alert("Producto no encontrado");
        return null; // Retorna null si el producto no es válido
    }
}

// Función para obtener el día de la compra con o sin tildes
function obtenerDiaDeCompra() {
    let diaDeCompra = prompt("Ingresa el día de tu compra (lunes a domingo):").toLowerCase();

    // Mapa para corregir días sin tildes
    const diasCorregidos = {
        "sabado": "sábado",
        "domingo": "domingo",
        "lunes": "lunes",
        "martes": "martes",
        "miercoles": "miércoles",
        "jueves": "jueves",
        "viernes": "viernes"
    };

    // Si el día ingresado está en el mapa, lo corregimos
    if (diasCorregidos[diaDeCompra]) {
        diaDeCompra = diasCorregidos[diaDeCompra];
    }

    // Lista de días válidos
    const diasValidos = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    
    // Verifica si el día ingresado es válido
    if (!diasValidos.includes(diaDeCompra)) {
        alert("Día no válido, por favor ingresa un día válido.");
        return null;
    }
    return diaDeCompra;
}

// Función para calcular el descuento de un producto según el día de compra
function calcularDescuentoProducto(producto, diaDeCompra) {
    const descuentos = {
        lunes: 0.00, // Sin descuento
        martes: 0.00, // Sin descuento
        miércoles: 0.00, // Sin descuento
        jueves: 0.00, // Sin descuento
        viernes: 0.30, // 30% de descuento
        sábado: 0.20, // 20% de descuento
        domingo: 0.10 // 10% de descuento
    };

    // Verifica si el día es válido y calcula el descuento
    if (diaDeCompra && descuentos[diaDeCompra] !== undefined) {
        const descuento = descuentos[diaDeCompra];
        return producto.precio * (1 - descuento);
    } else {
        alert("Día no válido para el descuento");
        return producto.precio;
    }
}

// Función para mostrar el precio con descuento de un producto
function mostrarPrecioConDescuento(producto, diaDeCompra) {
    const precioConDescuento = calcularDescuentoProducto(producto, diaDeCompra);

    // Si el día es de lunes a jueves, mostrar mensaje especial
    if (diaDeCompra === "lunes" || diaDeCompra === "martes" || diaDeCompra === "miércoles" || diaDeCompra === "jueves") {
        alert(`Hoy tu producto "${producto.nombre}" no tiene descuento. El precio es: $${precioConDescuento.toFixed(2)}`);
    } else {
        alert(`El precio de "${producto.nombre}" con descuento es: $${precioConDescuento.toFixed(2)}`);
    }
}

// Función para realizar una compra
function realizarCompra() {
    // Preguntar qué categoría quiere el usuario
    let categoriaNombre = prompt("¿Qué categoría deseas buscar? Ejemplo: 'Pinturas cine'").toLowerCase();

    // Filtramos los productos por la categoría
    const productosDeCategoria = obtenerProductosPorCategoria(categoriaNombre);

    // Si hay productos en la categoría, mostrar la lista
    if (productosDeCategoria.length > 0) {
        // Mostrar los productos filtrados
        alert("Productos disponibles: " + productosDeCategoria.map(p => p.nombre).join(", "));

        // Preguntar al usuario qué producto desea comprar
        let productoNombre = prompt("¿Cuál de estos productos deseas comprar?");

        // Buscar el producto seleccionado
        let productoSeleccionado = productosDeCategoria.find(p => p.nombre.toLowerCase().replace(/\s+/g, '') === productoNombre.toLowerCase().replace(/\s+/g, ''));

        // Si el producto no se encuentra, mostrar un mensaje
        if (productoSeleccionado) {
            // Preguntar el día de la compra
            const diaDeCompra = obtenerDiaDeCompra();
            
            if (diaDeCompra) {
                // Mostrar el precio con descuento
                mostrarPrecioConDescuento(productoSeleccionado, diaDeCompra);
            }
        } else {
            alert("Producto no encontrado en la categoría seleccionada.");
        }
    } else {
        alert("No hay productos disponibles en esta categoría.");
    }
}

// Función principal para preguntar si el usuario quiere continuar comprando
function interactuarConProductos() {
    let continuar = true; // Comienza el ciclo como verdadero, es decir, siempre hará una compra inicialmente
    while (continuar) {
        // Realizamos la compra
        realizarCompra();

        // Preguntar si el usuario quiere seguir comprando
        let respuesta = prompt("¿Deseas realizar otra compra? (Sí/No)").toLowerCase();

        // Si la respuesta es no, termina el ciclo y muestra mensaje de despedida
        if (respuesta === "no") {
            alert("Muchas gracias por tu compra, dirígete hacia el carrito para continuar con el pago.");
            continuar = false; // Termina el ciclo
        } // Si la respuesta es "sí", el ciclo continuará
    }
}

// Llamada a la función para iniciar la interacción
interactuarConProductos();

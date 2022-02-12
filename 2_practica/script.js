function calcularTotal() {
    const precio = document.getElementById('precio').value;
    const descuento = document.getElementById('descuento').value;
    const total = (1-descuento/100)*precio;
    document.getElementById('total').innerText = 'Total: ' + total;
    console.log({ //Imprime en formato JSON
        precio,
        descuento,
        total
    });
}

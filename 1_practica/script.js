//Parametros son las variables que se escriben en la cabecera de una funcion al declararla
//Argumentos son los valores que se pasan a una funcion cuando se la llama

const datosCuadrado = function(lado) {
    console.group("Cuadrado"); // Agrupar impresiones en consola
    console.log('Perimetro: ' + lado*4);
    console.log('Area: ' + lado**2);
    console.groupEnd();
};
datosCuadrado(3);

const datosTriangulo = function(lado1,lado2,lado3,base,altura) {
    console.group("Triangulo");
    console.log(
        'Perimeto: '
        + (lado1 + lado2 + lado3)
    );
    console.log(
        'Area: '
        + (base * altura / 2)
    );
    console.groupEnd();
};
datosTriangulo(3,3,3,3,3);

//Math es el objeto que tiene funciones y cttes matematicas
console.log(Math.PI);
console.log(Math.pow(3,2));



function calcularAreaCuadrado() {
    let lado = document.getElementById('ladoCuadrado').value; //Obtener el input y luego su valor
    alert(lado**2);
}
function calcularPerimetroCuadrado() {
    let lado = document.getElementById('ladoCuadrado').value;
    alert(lado*4);
}
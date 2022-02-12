/*
    Promedio: Media aritmetica (a1+a2+...+an / n)
    No muestra resultados exactos cuando algunos valores estan muy dispersos
    
    Mediana: El valor del medio si se ordenan los valores de menor a mayor
    Si n es par se saca el promedio de los dos elementos del medio
    Muestra resultados exactos cuando algunos valores estan muy dispersos

    Moda: El elemento mas repetido
    Si existe mas de un elemento que se repite el numero maximo de veces
    todos estos elementos forman la moda
*/

var calcularPromedio = function(valores) {
    var sum = valores.reduce(function(sum = 0,vi) {
        return sum +vi;
    });
    return sum / valores.length;
};

var calcularMediana = function(valores) {
    valores.sort(function(a,b) {
        return a - b;
    });
    var n = valores.length;
    if(n % 2 == 0) {
        return valores[Math.floor(n/2)-1] + valores[n/2] / 2;
    } else {
        return valores[Math.floor(n/2)];
    }
}

var calcularModa = function(valores) {
    return valores.sort(function(a,b) {
        var size_a = valores.filter(function(valor){
            return valor === a;
        }).length;
        var size_b = valores.filter(function(valor){
            return valor === b;
        }).length;
        return size_a - size_b;
    }).pop();
}

var calcularModa1 = function(valores) {
    var sinRepetidos = {};
    valores.map(function(valor) {
        if(sinRepetidos[valor]) {// Se usan corchetes para crear atributos en un JSON, . si ya existe el atributo
            sinRepetidos[valor] += 1;
        } else {
            sinRepetidos[valor] = 1;
        }
    });

     // Retorna un array del JSON, cada posicion almacena un vector [key,value]
     // 0: [1,3], 1: [2,4], 2: [3,5]
    var sinRepetidosSorted = Object.entries(sinRepetidos).sort(function(a,b) {
        return a[1] - b[1];
    });
    return sinRepetidosSorted[sinRepetidosSorted.length - 1][0];
}
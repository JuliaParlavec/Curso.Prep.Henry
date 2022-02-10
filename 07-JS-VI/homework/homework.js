// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  return nombre[0].toUpperCase() + nombre.slice(1);
  
  //nombre[0] --> asi, siendo una string, podemos indicar que letra queremos marcar
  //toUpperCase() --> para pasarlo a mayuscula
  //nombre.slice(1) --> obtener el residuo del string (desde el segundo carácter, índice 1, hasta el final del string).
}

function invocarCallback(cb) {
  // Invoca al callback `cb` --> es una funcion que se pasa como parametro a otra funcion y se ejecuta dentro de ella
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var suma = 0;

  for (var i = 0; i < numeros.length; i ++){
    suma = suma + numeros[i];
  }
  cb(suma); //asi se pasa el resultado

  //TAMBIEN LO PODEMOS HACER CON EL REDUCE, QUE SUMA TODOS LOS ELEMENTOS DE UN ARRAY:
  // var suma = numeros.reduce(function(acc, curr));{              acc (acumulador) --> este primer valor es el acumulador, donde se van a ir guardando los datos
  // return acc + curr;}                                           curr (current o actual) --> es cada uno de los elementos del array (numeros[i] <- esta parte)
  // cb(suma);
}
                                               

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach(function(element){ //FOR EACH es una funcion que recibe una funcion que recibe un elemento, y por cada uno de esos elementos se ejecuta CB. 
    cb(element);
  });                               //FIJATE QUE EL PARENTESIS ENCIERRA LAS LLAVES, PQ SON DE LA FUNCION

  // OTRA FORMA DE HACERLO CON FOR
 // for (var i = 0; i < array.length; i ++){
  //  cb(array[i]);
  //}
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //NO ENTENDI

  var resultado = array.map(function(elemento){          //map --> parecido al foreach pero retorna un nuevo array
    return cb(elemento)
  })     
  return resultado;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  
  for (var i = 0; i < array.length; i ++){
    e = array[1];
    if (array[i][0] === 'a'){          //Aca se pone primero el array (array[i]) y despues la letra que nos queremos fijar [0] 
      nuevoArray.push(array[i]);   
    }
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

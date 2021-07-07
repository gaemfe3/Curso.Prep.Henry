// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  array = [];
  j = -1;
  for (const i in objeto) {
    j = j + 1; 
    array[j] = [i, objeto[i]]
   };
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const l = string.length;
  const array1 = [];
  var objeto1 = {};

  for (let i=0; i < l; i++) { array1[i] = string.charAt(i) }

  for (let j= 0; j< l; j++) { 
    contar = 0; 
    
    for (let k=0; k<l; k++) { 
      
      if (array1[j]===array1[k]) {
        contar=contar + 1;
      } 
    }
     objeto1[array1[j]]=contar
  }

  return objeto1;

  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  const ls = s.length;
  var siesimo = '';
  var siesimoU = '';
  var sfront = '';
  var srest = '';

  for (let i=0; i < ls; i++) {
   siesimo = s.charAt(i);
   siesimoU = siesimo.toUpperCase(); 

    if (siesimo === siesimoU) {
      sfront = sfront + siesimoU;
    }
    else { 
      srest = srest + siesimo;
    }
  }
  return sfront + srest;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var ind = 0;
  var j = -1;
  var substr = [];
  var lnt = str.length;
  var mstr = '';
  var mstr2 = '';
  var co = 0;

  for (let i=0; i<lnt; i++ ) {

     if (str.charAt(i)===' ') {
       j = j + 1; 
       substr[j] = str.substring(ind,i);  
       ind = i + 1} 
  }
  
  substr[j+1] =  str.substring(ind);

  for (let k=0; k<substr.length; k++) {
    co = substr[k].length -1; 
    mstr='';

    for (let n= co; n>=0; n--) {
      mstr = mstr + substr[k].charAt(n)
    };

    mstr2= mstr2 + mstr + ' ';
  }

  return mstr2.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  nstr = numero.toString();
  mnstr = '';
  co = nstr.length -1; 

    for (let i = co; i >= 0; i--) {mnstr = mnstr + nstr.charAt(i)};

    if (mnstr===nstr) {return 'Es capicua'}
    else {return 'No es capicua'}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var s='';
  var strg= '';
  const l= cadena.length;

  for (let i= 0; i< l; i++) {
    s = cadena.charAt(i);

    if (s==='a'|| s==='b' || s=='c') {strg = strg + ''}
    else {strg = strg + s};
  }

  return strg;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const l = arr.length;
  var arr1 = [];
  var ind = 0;
  var ind1 = 0;
  var ls1= 0;
  var ls= 0;

  for (let i=0; i < l; i++) {
    ls = arr[i].length;
    ind = 0;
    ind1 = 0;

    for (let j=0; j< l; j++) {
      ls1 = arr[j].length;

      if (ls > ls1) {ind = ind + 1}
      else if (ls===ls1 && i!==j) {
        
        if (arr[i]===arr[j]) {ind1 = ind1 + 1}
        else if (i>j) {ind = ind +1}
      }
    }

    arr1[ind] = arr[i];

    if (ind1>=1) { 
      
      for (let k=ind+1; k<=ind+ind1; k++) {
        arr1[k] = arr[i];
      }
    }
  }

  return arr1;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const l1 = arreglo1.length;
  const l2 = arreglo2.length;
  var n = [];
  var ice = -1;

  for (let i=0; i<l1; i++) {
    nri = arreglo1[i];

    for (let j=0; j<l2; j++) {
      nrj = arreglo2[j];

      if (nri === nrj) {
        ice = ice + 1;
        n[ice] = nri;
        break;
      }
    }
  }
  return n;  

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


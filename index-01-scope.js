/********** Esempio 1 **********/
var persone = ["Lorenzo", "Giacomo", "Emma", "Carmen"];
var lista = document.getElementById("lista-persone");

for(var indice = 0; indice < persone.length; indice++){
  var element = document.createElement("li");
  var persona = persone[indice];
  element.innerText = persona;

  element.addEventListener("click", function(){
    var f = indice;
    alert("Hai cliccato su " + persona + " in posizione " + f);
  });

  lista.appendChild(element);
}

// CORREZIONE:
/*
(function(persona, indice){
  element.addEventListener("click", function(){
    alert("Hai cliccato su " + persona + " in posizione " + indice);
  });
})(persona, indice)
*/

/********** Esempio 2 **********/
// Vediamo perchè evitare il Global Scope:
var a = 42;
var b = 57;

function example2(){
  // a è una nuova variabile perchè ha var davanti, cosa che non ha b
  // se avessi scritto var a = 10, b = 10 allora avevo due nuove var
  var a = b = 10;
}

example2();

/********** Esempio 3 **********/
// In questo esempio sia i che j sono variabili nello scopo globale
// In un browser l'oggetto globale è l'oggetto window
function example3_altra_func(){
  // La i assumerà valore pari a 10 e cioè l'ultimo del for
  for(i = 0; i < 10; i++){}
}

function example3(){
  i = 1;
  j = 1;
  example3_altra_func();
  // Avendo fatto l'iterazione for, la i non varrà più 1 ma 10
  console.log("1 + 1 = ", (i+j));
}

example3();
console.log(window.i);

/********** Esempio 4 **********/
// Vediamo come creare il proprio scope
var va = 42
var vb = 57

function example4(){
  // All'interno di questa funzione dichiarando le variabili con var creo un nuovo scope
  var va = 10, vb = 10;
  console.log("10 + 10 = " + (va + vb));
  return va;
}

example4();

/********** Esempio 5**********/

var wa = 10;

function example5(){
  var wa = 20;

  function inner(){
    // Non avendo la var questa sarà legata al wa di example5()
    wa = 30;

    console.log('Interna: ', wa);
  }
  inner();
  console.log('Example5: ', wa);
}

example5();
console.log('Globale: ', wa);

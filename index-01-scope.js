
/********** Esempio 1 **********/

var persone = ["Lorenzo", "Giacomo", "Emma", "Carmen"];
var lista = document.getElementById("lista-persone");

for(var indice = 0; indice < persone.length; indice++){
  var element = document.createElement("li");
  var persona = persone[indice];
  element.innerText = persona;

  element.addEventListener("click", function(){
    var i_persona = indice;
    alert("Hai cliccato su " + persona + " in posizione " + i_persona);
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

var es2_a = 42;
var es2_b = 57;

function example2(){
  // es2_a è una nuova variabile perchè ha var davanti, cosa che non ha es2_b
  // se avessi scritto var es2_a = 10, es2_b = 10 allora avevo due nuove var
  var es2_a = es2_b = 10;
}

example2();

/********** Esempio 3 **********/
// In questo esempio sia es3_i che es3_j sono variabili nello scopo globale
// In un browser l'oggetto globale è l'oggetto window

function example3_altra_func(){
  // La es3_i assumerà valore pari a 10 e cioè l'ultimo del for
  for(es3_i = 0; es3_i < 10; es3_i++){}
}

function example3(){
  es3_i = 1;
  es3_j = 1;
  example3_altra_func();
  // Avendo fatto l'iterazione for, la es3_i non varrà più 1 ma 10
  console.log("1 + 1 = ", (es3_i+es3_j));
}

example3();
console.log(window.es3_i);

/********** Esempio 4 **********/
// Vediamo come creare il proprio scope
var es4_a = 42
var es4_b = 57

function example4(){
  // All'interno di questa funzione dichiarando le variabili con var creo un nuovo scope
  var es4_a = 10, es4_b = 10;
  console.log("10 + 10 = " + (es4_a + es4_b));
  return es4_a;
}

example4();

/********** Esempio 5 **********/
// Vediamo il comportamento di es5_a all'interno dei vari SCOPE:
var es5_a = 10;

function example5(){
  var es5_a = 20;

  function inner(){
    // Non avendo la var questa sarà legata al es5_a di example5() e pertanto
    // cambierà il valore di es5_a di example5() mentre la es5_a di globale rimmarrà 10
    es5_a = 30;

    console.log('Interna: ', es5_a);
    return es5_a;
  }
  inner();
  console.log('Example5: ', es5_a);
  return es5_a
}

example5();
console.log('Globale: ', es5_a);

/********** Esempio 6 **********/
// In questo esempio andiamo a passare una valore ad una funzione e quindi utilizziamo i parametri
var es6_a = 30;

// I parametri creano un nuovo scope all'interno della funzione, è come se avessi un var
function example6(es6_a){
  // questa es6_a è parte dello scope della funzione in quanto il parametro ne crea una
  // copia locale. Omettendo il parametro avrei avuto un legame con la es6_a globale e avrei
  // modificato quella variabile globale
  es6_a = 10;
  console.log('Example6: ', es6_a);
}

example6(es6_a)
// la variabile es6_a globale rimarrà invariata
console.log('Globale: ', es6_a);

/********** Esempio 7 **********/
// In questo esempio metto in evidenza che una variabile, per quanto interna, non è di blocco
// ma è legata allo scope della funzione più vicina
/*
{
  {
    {
      var foo = 100;
    }
  }
}
console.log(foo); // stampa 100 in quanto le {} sono blocchi ma le variabili si legano allo scope
di una funzione, in questo caso allo scope globale!
*/

function example7(){
  for(var i=0; i < 10; i++){
    if(i > 5){
      // Questa variabile è attaccata allo scopo di example7 ovvero la funzione più vicina!
      var temp = i * 10;
    }
  }

  console.log('Esempio7: ', temp, i);
}
// Questo è un errore:
//console.log('Esempio7: ', temp, i);
example7();

/********** Esempio 8 **********/
// Vediamo i 3 modi per creare una funzione in JS
function example8a(){
  console.log('Questa è una function declaration. Deve avere un nome!');
}
// qui creo una variabile a cui associo una funzione
var example8b = function(){
  consol.log('Questa è una function expression. Può essere anonima!')
}; //mettere il ; alla fine di una var è stilisticamente corretto anche se non necessario
// la funzione example8c_foo è accessibile solo al suo interno e non all'esterno
var example8c = function example8c_foo(){
  console.log('Questa è una named function expression.');
};

/********** Esempio 9 **********/
// Vediamo come fare per avere una funzione privata. Se provo a richiamarla dal console
// però riesco a vederla...
function funcPrivata(){
  console.log('non puoi richiamarmi!');
}

/********** Esempio 10 **********/
// ...devo creare un nuovo scope per renderla privata
// example 10 funziona da wrapper
function example10(){
  var i = 1;
  // Questa funzione privata è accessibile nello scope di example10()
  function myPrivateFunc(){
    console.log('Nessuno può richiamarmi dal global scope!');
  }
  // Prova a richiamare, da console, la public1() più volte. La i incrementa. Abbiamo creato
  // una sorta di incapsulamento della variabile i e della funzione privata. Posso esportare
  // la mia funzione privata, creando una funzione pubblica nell'oggetto globale window
  window.public1 = function(){
    console.log('La i vale: ', i++);
    myPrivateFunc();
  }

  myPrivateFunc();
}
// Il problema rimane in quanto ho una funzione pubblica e con nome. Ogni volta che la invoco
// creo un nuovo blocco in memoria che reinizializza tutte le variabili che avevo creato
example10();


/********** Esempio 11 **********/
// Vediamo le IIFE. Per creare una funzione anonima (lo sono le espressioni di funzioni) ma
// senza legarle ad una variabile (lo sono le dichiarazioni di espressioni che non posso
// essere anonime), devo ricorrere ad un trucco, cioè fare il wrap tra le parentesi:
(function(){

});
// ma ora ho il problema che questa funzione non la posso richiamare e non viene eseguita.
// Mi basta mettere le parentesi per invocarla ():
(function(){ // se mettessi un nome alla IIFE posso richiamarla? NO!
  console.log('Sono una IFFE!')
  function privateFunction(){
    console.log('Sono una funzione privata!');
  }

  // Posso esportare la mia funzione privata:
  window.public_10 = function(){
    privateFunction();
  }
})();

// Posso passare degli argomenti ? CERTO!
var nome = "Lorenzo";
(function(){
  console.log(nome);
})(nome);
// E posso anche ricambiare il nome all'interno della IIFE
var name = "Federico";
(function(n){
  console.log(n);
})(name);

(function(global){
  console.log('Sono una IFFE!')
  function privateFunction(){
    console.log('Sono una funzione privata!');
  }

  // Posso esportare la mia funzione privata:
  global.public_10_n = function(){
    privateFunction();
  }
})(window);

/********** Esempio 12 **********/
// Vediamo il concetto di HOISTING = Portare su. Questo è dovuto al fatto che il compilatore
// JS fa una prima passata di compilazione (COMPILE-TIME) in cui "prepara" la "conoscenza"
// di variabili e funzioni, ovvero crea le allocazioni di memoria necessarie. Crea lo SCOPE.

function example12(){
  console.log(a); // undefined // la variabile sarà definita ma non avrà valore (undefined)
  var a = 10; // l'hoisting porta su la dichiarazione di a ma non il suo valore!
  console.log(a); // 10
}

function example12_b(){
  console.log(a); // undefined // la variabile sarà definita ma non avrà valore (undefined)
  if(false){
    var a = 10; // l'hoisting porta su la dichiarazione di a ma non il suo valore!
  }
  console.log(a); // 10
}

example12();
example12_b();

/********** Esempio 13 **********/
// Vediamo il concetto di HOISTING riferito alle funzioni

example13(); // invoco prima di dichiarare la funzione
example13_b();

function example13(){ // la funzione viene "hoistata" ma eseguita solo quando viene chiamata!
  inner();
  return;
  // Alcuni editor possono segnalarmi il warning di code not reachable
  console.log('Dead Code da qui.');
  // Anche se la funzione è nella parte "Dead Code" per via della return, questa funziona!
  function inner(){ // function declaration
    console.log('Sono la funzione inner');
  }
}

function example13_b(){
// ho solo la variabile hoisted ma non il suo valore e pertanto non viene riconosciuta come funzione!
  //inner(); // Errore: inner is not a function - Ho un type error e non un undefined error
  return;
  console.log('Dead Code da qui.');
  // sola la variabile è hoisted ma non il suo valore
  var inner = function(){ // function expression
    console.log('Sono la funzione inner');
  };
}

/********** Esempio 14 **********/
// Lexical/Static Scope (I bound sono a COMPILE TIME) vs Dynamic Scope
// Vediamo questo esempio: js non sa quando e dove chiamerò example14_a per questo
// la a è bounded alla variabile a globale

function example14_a(){
  // la a è bound alla a globale in compile time
  console.log('Example14_a: ', a);
}

function example14_b(){
  var a = 10;
  example14_a();
  console.log('Example14_b: ',a);
}

var a = 20;
example14_b();
example14_a();

var persone = ["Lorenzo", "Giacomo", "Emma", "Carmen"];
var lista = document.getElementById("lista-persone");

for(var i = 0; i < persone.length; i++){
  var element = document.createElement("li");
  var persona = persone[i];
  element.innerText = persona;

  element.addEventListener("click", function(){
    alert("Hai cliccato su " + persona + " in posizione " + i);
  });

  lista.appendChild(element);
}

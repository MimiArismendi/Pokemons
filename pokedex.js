function Pokemon(nombre, color, puntosAtaque){
    this.nombrePokemon = nombrePokemon;
    this.colorPokemon = colorPokemon;
    //this.nivelDeAmistad = 0;
    //this.vida = 100;
    this.puntosAtaque = puntosAtaque;

  /*  this.saludar = function () {
      console.log("Hola, me llamo " + this.nombre);
    };
*/
    this.pelear = function (pokemonObjeto) {
      pokemonObjeto.vida = pokemonObjeto.vida -this.puntosAtaque;
    };

/*    this.beber = function (tipoAlcohol) {
      if(tipoAlcohol == "chelas"){
        this.nivelDeAmistad += 80;
      }
      else if (tipoAlcohol == "vodka"){
        this.nivelDeAmistad += 10;
      }
    };*/
};

var pokemons = [];

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value)
                           )
  pokemons.push(pokemon);
  console.log(pokemons);
  mostrarPokemons();
}

function mostrarPokemons(){
  var pokemon1 = document.getElementById("lista1");
  var pokemon2 = document.getElementById("lista2");
console.log(pokemon1);
  //pokemons.forEach(function(pokemon){
    var elemento = document.createElement("option");
    var input1=document.getElementById("nombrePokemon").value;
    console.log(input1);
    elemento.innerText = input1;
    pokemon1.appendChild(elemento);

  //pokemons.forEach(function(pokemon){
    var elemento = document.createElement("option");
    var input1=document.getElementById("nombrePokemon").value;
    elemento.innerText = input1;
    console.log(pokemons.nombrePokemon);
    pokemon2.appendChild(elemento);


}

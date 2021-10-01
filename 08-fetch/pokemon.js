
let pokemons = {};

function imprimirPokemons(data) {
    document.getElementById('pokemon').innerHTML = '<ul>';
    for (poke of data) {
        document.getElementById('pokemon').innerHTML += `<li><img src="img/${poke.name.toLowerCase()}.png" /> Nome: ${poke.name}, preço: ${poke.price}, tipo: ${poke.type}</li>`;
    }
    document.getElementById('pokemon').innerHTML += '</ul>';
}

function carregarPokemon() {
    fetch('./pokemon.json')
        .then( res => res.json())
        .then(data => {
            pokemons = data;
        });
}

function filtrar() {
    const tipo = document.getElementById('tipos').value;
    console.log("TIPO = "+ tipo);
    const pokemonsFiltrados = pokemons.filter(p => p.type.includes(tipo));
    imprimirPokemons(pokemonsFiltrados);
}


async function getPokemonInfo(pokemonName) {
    try {
        // Obtener información del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/meowth`);
        const data = await response.json();
        
        // Obtener nombre y tipo del Pokémon
        const pokemonInfo = {
            name: data.name,
            type: data.types[0].type.name
        };
        
        // Obtener información de la evolución
        const speciesUrl = data.species.url;
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse.json();
        const evolutionUrl = speciesData.evolution_chain.url;
        const evolutionResponse = await fetch(evolutionUrl);
        const evolutionData = await evolutionResponse.json();
        
        // Obtener nombre y tipo de la evolución
        const evolutionName = evolutionData.chain.species.name;
        const evolutionTypeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/persian`);
        const evolutionTypeData = await evolutionTypeResponse.json();
        const evolutionTypeInfo = {
            name: evolutionTypeData.name,
            type: evolutionTypeData.types[0].type.name
        };

        // Devolver la información del Pokémon y su evolución
        return { pokemon: pokemonInfo, evolution: evolutionTypeInfo };
    } catch (error) {
        console.error('Error al obtener información del Pokémon:', error);
    }
}


// Ejemplo de uso
getPokemonInfo('pikachu').then(result => {
    console.log("Segunda Parte:")
    console.log('Información del Pokémon:', result.pokemon);
    console.log('Información de la evolución:', result.evolution);
});

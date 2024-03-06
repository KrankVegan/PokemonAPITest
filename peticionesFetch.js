async function obtenerDatosPokemon(id){
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

if(!respuesta.ok){
    throw new Error("Error al cargar datos");
}
return await respuesta.json();
}

async function mostrarPokemones(id){
    try{
        const personaje = await obtenerDatosPokemon(id);
        console.log(personaje);
    }catch(error){
        console.error(error);
    }
}

mostrarPokemones(88); // grimer ID number, test.

async function obtenerDetallesPokemon(){
    console.log("Primera Parte:")
    try{
        let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/meowth"); // obtenemos a pokemon meowth
        if(!respuesta.ok) throw new Error("Error al obtener el personaje") ;
        let personaje = await respuesta.json();
        console.log("Personaje: ", personaje);

        console.log("Habilidades:")
        for (let i = 0; i < 3; i++) {
            console.log(personaje.abilities[i])
        }

        console.log("Pokemon tipo:", personaje.types[0]);

    }catch(error){
        console.error(error);
    }
}


obtenerDetallesPokemon();
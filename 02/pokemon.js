const{ httpclient } = require('./Plugins/httpclient')
const BuscarPokemonId = async (id) => {
    const url = ("https://pokeapi.co/api/v2/pokemon/gengar")
    const Pokemon = await httpclient.get(url)
    return Pokemon.name
}
module.exports = { BuscarPokemon: BuscarPokemonId}
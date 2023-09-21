//const {httpclient} = require ('./Plugins/httpcliente')
import { IPokemon } from "../interfaces/IPokemon"
import{httpclient} from "../plugins"
export const BuscarPokemonPorId = async(id:string):Promise<IPokemon> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const Pokemon = await httpclient.get<IPokemon>(url)
    return Pokemon
}
  //  module.exports = {BuscarPokemon:BuscarPokemonPorId}
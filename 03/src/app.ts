import {BuscarPokemonPorId} from "./functions" 
import { IPokemon } from "./interfaces/IPokemon"
//BuscarPokemonPorId ("1").then((pokemon) => 
//{console.log (pokemon.abilities[0].ability.name)}
 (async ()=>{
    const pokemon:IPokemon = await BuscarPokemonPorId("666")
    console.log (pokemon.abilities[0].ability.name)
 })()
/*let nombre: string = "prueba de ejecución"
nombre = "45"
console.log(nombre)

function prueba(a:number,b:number){
    return a+b;
}
const funcionPrueba = (a:number,b:number)=>a+b;

interface IUser {
    id:number;
    name:string;
    address:string;
    phone:string
}
const userJohn:IUser = {id:1,name:"John",address:"Manta",phone:"78536"};
const users:IUser[]=[
    {id:1,name:"John",address:"Manta",phone:"78536"},
    {id:1,name:"John",address:"Manta",phone:"78536"},
    {id:1,name:"John",address:"Manta",phone:"78536"},
    {id:1,name:"John",address:"Manta",phone:"78536"},
];*/

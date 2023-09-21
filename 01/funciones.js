const usuario = [
    {
        id: 1,
        nombre: 'Juan',

    },
    {
        id: 2,
        nombre: 'Marco',
        
    },
    {
        id: 3,
        nombre: 'Annel',
        
    }
]

const buscar_Usuario_Id = (id, callback)=>{
   const usuarioEncontrado= usuario.find((elemento)=>{
        return elemento.id === id

    });
    /*if (usuarioEncontrado)
    callback(null, usuarioEncontrado)
else
callback("No pudimos encontrar el usuario")
}; */
(usuarioEncontrado)?
    callback(null, usuarioEncontrado)
    : callback("No pudimos encontrar el usuario")
}
module.exports = {
    buscar_Usuario_Id
}
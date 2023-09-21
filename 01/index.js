const { buscar_Usuario_Id} = require('./funciones')
buscar_Usuario_Id(1, (err, usuario) =>{
    if(err)
     return console.log(err)
     console.log(usuario)
     })
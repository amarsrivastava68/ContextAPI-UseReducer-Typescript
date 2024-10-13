const jwt = require('jsonwebtoken')
const generateToken = (id ) =>{
    return jwt.sign ({id} , "amar68" , {
        expiresIn : '30d'
         
    })  
}

module.exports = generateToken
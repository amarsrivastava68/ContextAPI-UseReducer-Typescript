const mongoose = require('mongoose')
const connectDB = async() => {
    try {
        const conn = await mongoose.connect ("mongodb+srv://amar68:Jaibalaji68$@amar.og3v7.mongodb.net/?retryWrites=true&w=majority&appName=amar" , {
          dbName : "custom-database-created-by-Me"
            
        })

        console.log('mongodb is connected now . . .');
    } catch (error) {
        console.log(error)
        console.error(' some error happened . . . ');
        process.exit();
    }
}
module.exports = connectDB
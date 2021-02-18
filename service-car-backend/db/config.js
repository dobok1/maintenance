

const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        const conection = process.env.DB_CONN
        await mongoose.connect(conection, 
                {
                        useNewUrlParser: true, 
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false
                });
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la db');
    }
}

module.exports = {
    dbConnection
}
require('dotenv').config();
const mongoose = require('mongoose');

const {
    MONGO_URI : mongoURI
} = process.env;




module.exports = (function () {
    mongoose.Promise = global.Promise;

    return {
        connect(){
            mongoose.connect(mongoURI,{
                useMongoClient: true
            }).then(
                () => {
                    console.log('connetion mongodb')
                }
            ).catch(e => {
                console.error(e);
            });
        }
    }
})();



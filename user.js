const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: String

    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    group: [
        {
        name: {
            type: String
        }
    }
    ]
})
module.exports = mongoose.model('User', User);
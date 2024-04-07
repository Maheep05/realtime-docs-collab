const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id : {
        type : String,
        required : true
    },
    data  : {
        type : Object,
        required : true,
    }
});

const documentModel = mongoose.model("google-docs" , Schema);

module.exports = {documentModel};

const mongoose= require('mongoose');

const flowSchema = new mongoose.Schema({
    name:{
        type:String
    },
    flow:{
        type: mongoose.Schema.Types.Mixed,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Flow', flowSchema);
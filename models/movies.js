const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    rating: String,
    available: Boolean
    // name:{
    //     type:String,
    //     required:[true,'Movie name required']
    // },
    // rating:{
    //     type:String,
    // },
    // available:{
    //     type:Boolean,
    //     default:false
    // }
 
});
const Movie = mongoose.model('moview',MovieSchema);
module.exports=Movie;
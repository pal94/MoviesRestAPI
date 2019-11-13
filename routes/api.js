const express = require('express');
const router = express.Router();
const Moviemodel = require('../models/movies');

router.get('/movies',function(req,res,next){
    Moviemodel.find({}).then(function(movies){
        //res.send(movies);
        res.render("index", {movies: movies});
    });
});

router.get('/movies/new',function(req,res){
    res.render("new");
});

router.post('/movies',function(req,res,next){
    Moviemodel.create(req.body.movie).then (function(movie){
        //res.send(movie);
        res.redirect('/movies');  
}).catch(next);
});

router.put('/movies/:id',function(req,res,next){
    Moviemodel.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Moviemodel.findOne({_id:req.params.id}).then(function(movie){
            res.send(movie);
        });
    });
    
});

router.delete('/movies/:id',function(req,res,next){
    Moviemodel.findByIdAndRemove({_id:req.params.id}).then(function(movie){
        res.send(movie);
    });
});

module.exports = router;
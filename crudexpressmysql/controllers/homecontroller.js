module.exports = {
    index: function(req,res,next){
        res.render('index',{ title: 'DAN', kill: 'Pug' })
    }
}
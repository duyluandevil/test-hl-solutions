module.exports.checkCookie = function(req, res, next){
    if(req.cookies.readAllJoke){
        res.render("index",{
            contentJoke: "That's all the jokes for today! Come back another day!"
        })
        return;
    }
    next()

}
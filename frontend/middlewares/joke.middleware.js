var jokeModel = require('../model/joke.model');

function indexJoke(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i].vote === "")
        {
            return i;
            break;
        }
    }
}

module.exports.checkCookie = function(req, res, next){
    if(indexJoke(jokeModel) == null && req.cookies.Track){
        res.render("index", {
            contentJoke:"That's all the jokes for today! Come back another day!"
        })
    }
    else if(req.cookies.Track == "Like"){
        jokeModel[indexJoke(jokeModel)].vote = req.cookies.Track
        console.log(jokeModel)
    }
    else if(req.cookies.Track == "Dislike"){
        jokeModel[indexJoke(jokeModel)].vote = req.cookies.Track
        console.log(jokeModel)
    }
    else if(!req.cookies.Track){
        jokeModel.forEach(function(e){
            e.vote = ""
        })
    }
    
    next()

}
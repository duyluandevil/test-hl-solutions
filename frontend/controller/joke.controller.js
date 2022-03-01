var jokeModel = require("../model/joke.model")

function indexJoke(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i].vote === "")
        {
            return i;
            break;
        }
    }
}

module.exports.index = function(req, res){
    if(indexJoke(jokeModel) !== undefined)
        res.render("index",{
            contentJoke: jokeModel[indexJoke(jokeModel)].content
        })
    else{
        res.render("index", {
            contentJoke: "That's all the jokes for today! Come back another day!"
        })      
    }
    // console.log(indexJoke(jokeModel))
}

module.exports.vote = function(req, res){
    if(req.body.like !== undefined){ //Check req.body result
        if(indexJoke(jokeModel) != null) //check next index joke
        {
            res.cookie("userVoteLike", "Like")
            jokeModel[indexJoke(jokeModel)].vote = req.body.like;
            res.redirect("/")
        }
        else{
            res.render("index", {
                contentJoke: "That's all the jokes for today! Come back another day!"
            })
        }
    }
    else if(req.body.like === undefined){
        if(indexJoke(jokeModel) != null)
        {
            res.cookie("userVoteDislike", "Dislike")
            jokeModel[indexJoke(jokeModel)].vote = req.body.dislike;
            res.redirect("/")
        }else{
            res.render("index", {
                contentJoke: "That's all the jokes for today! Come back another day!"
            })
        }
    }
}
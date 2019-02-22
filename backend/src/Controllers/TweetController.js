const Tweet = require("../models/Tweet");

//exporta um objeto com as funções definidas abaixo
module.exports = {
    async index(req, res) {
        //find = select, sort = order by
        const tweets = await Tweet.find({}).sort("-createdAt");

        return res.json(tweets);
    },
    
    async store(req, res){
        //create = insert
        //req.body = definir os parâmetros do tweet através do corpo da requisição
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
};
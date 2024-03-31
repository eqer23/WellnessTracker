const { Content } = require("../models/Content");


const newFiles = (req, res, next) => {
    let content = new Content({
        contentTitle : req.body.title,
        dateCreated : req.body.dateCreated,
        contentType: req.body.contentType,
        contentContents : req.body.content,
        description : req.body.description,
        creatorID : req.body.creatorID
    })
    if(req.file){
        content.contentContents = req.file.path
    }

    content.save()
    .then(response => {
        res.json({
            message : "UPLOADED!!!!!"
        })
    })
    .catch(error => {
        res.json({
            message: "An error Occured!"
        })
    })
}
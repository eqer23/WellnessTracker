const { Content } = require("../models/Content");


const uploadPostController = async (req, res) => {
    const { title, dateCreated, contentType, description, creatorID, ImgUrl, tag, difficulty, intensity, time } = req.body;
    const newContent = new Content({
        contentTitle: title,
        dateCreated: dateCreated,
        description: description,
        creatorID: creatorID,
        contentType: contentType,
        contentContents: ImgUrl,
        tag: tag,
        difficulty: difficulty,
        intensity: intensity,
        time: time
      });

    await newContent.save()
    .then(response => {
        res.json({
            message : "UPLOADED!!!!!"
        })
    })
    /*.catch(error => {
        res.json({
            message: "An error Occured!"
        })
    })*/
}
module.exports = uploadPostController;
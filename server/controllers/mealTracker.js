const { Meal } = require("../models/Content");


const mealPostController = async (req, res) => {
    const { title, dateCreated, contentType, description, creatorID, ImgUrl, tag } = req.body;
    const newMeal = new Meal({
        contentTitle: title,
        dateCreated: dateCreated,
        description: description,
        creatorID: creatorID,
        contentType: contentType,
        contentContents: ImgUrl,
        tag: tag
      });

    await newMeal.save()
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
module.exports = mealPostController;
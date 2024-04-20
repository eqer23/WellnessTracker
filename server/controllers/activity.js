const { Meal } = require("../models/Meals");


const activityPostController = async (req, res) => {
    const { title, dateCreated, description, creatorID, tag } = req.body;
    const newActivity = new Activity({
        contentTitle: title,
        dateCreated: dateCreated,
        description: description,
        creatorID: creatorID,
        tag: tag
      });

    await newActivity.save()
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
module.exports = activityPostController;
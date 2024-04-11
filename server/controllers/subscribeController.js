const { restart } = require("nodemon");
const { User } = require("../models/User");

const subscribeController = async (req, res) => {
    const userID = req.user._id; //this assumes I have user information in req.user
    const professionalID = req.params.professionalID; // not sure about this line. the User models encompasses Clients, professionals and admin

    try {
        // subscribe to the professional
        await User.findByIdAndUpdate(professionalID, { $addToSet: { subscribers: userID}});
        
        if (req.user.role.toLowerCase() === 'client') {
            await User.findByIdAndUpdate(userId, { $addToSet: { subscriptions: professionalID}});
        }

    res.json({ message: 'Subscribed Successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json( { message: 'Error subscribing to professional'});
    }
};

module.exports = subscribeController;
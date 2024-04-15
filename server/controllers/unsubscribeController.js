const { User } = require("../models/User");

const unsubscribeController = async (req, res) => {
    const userID = req.user._id;
    const professionalID = req.params.professionalID;

    try {
        await User.findByIdAndUpdate(professionalID, { $pull: { subscribers: userId} });

        await User.findByIdAndUpdate(userId, { $pull: {subscriptions: professionalID}});

        res.json({message: 'Unsubscribed successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error unsubscribing from professional'});
    }
};

module.exports = unsubscribeController;
const { restart } = require("nodemon");
const { User } = require("../models/User");

const isSubscribed = async (req, res) => {
    const userId = req.params.userId;
    const professionalId = req.params.professionalId;

    try {
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ message: "User not found"});
        }

        const subscribed = user.subscriptions && user.subscriptions.includes(professionalId);

        return res.json({isSubscribed: subscribed});
    } catch (error){
        console.error("Error checking subscription status", error);
        return res.status(500).json({ message: "Internal server error"});
    }
};

module.exports = isSubscribed;
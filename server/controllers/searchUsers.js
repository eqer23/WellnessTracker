const {User} = require("../models/User.js");

const searchUsersPostController = async (req, res) => {
    const searchQuery = req.query.query;
    try {
        const users = await User.find({
            email: {$regex: searchQuery, $options: "i"}
        });
        console.log(users);
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message});
    }
};

module.exports = searchUsersPostController;










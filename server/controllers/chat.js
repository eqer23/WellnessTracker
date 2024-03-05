// const { User } = require("../models/User.js");

// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await User.find({_id:{$ne:req.params.id}}).select([
//             "email",
//             "_id"
//         ]);
//         return res.json(users);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// module.exports = getAllUsers;

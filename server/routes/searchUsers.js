import express from "express";
const router = express.Router();
import "../db.js";
import searchContentPostController from "../controllers/searchPeople.js";

const User = require("../models/User");

router.get("/users", async(req, res) => {
    try{
        const page = parseint(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "Last Name";
        let specialty = req.query.specialty || "Any";

        const specialtyOptions = [
            "Yoga",
            "Cardio",
            "Weight Training",
            "Pilates",
            "Low Impact"
        ];
        //get data from database on specialties instead of hard coding

        specialty === "Any"
            ?(specialty = [...specialtyOptions])
            :(specialty = req.query.specialty.split(","));
        req.query.sort?(sort = req.query.sort.split(",")):(sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "A-Z"
        }

        const users = await User.find({name: { $regex: search, $options: "i"}})
        .where("specialty")
        .in([...specialty])
        .sort(sortBy)
        .skip(page * limit)
        .limit(limit);

        const total = await User.countDocuments({
            specialty: {$in: [...specialty]},
            name: {$regex: search, $options: "i"},
        });

        const response = {
            error: false,
            total,
            page: page + 1,
            limit, 
            specialties: specialtyOptions,
            users
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: "Internal server error"});
    }
});

export { router as searchUsersRouter };
const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.post("", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send();
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findUserByCredentials(
            req.body.username,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ error: "Wrong Login Credentials" });
    }
});
module.exports = router;

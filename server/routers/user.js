const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.cookie("token", token);
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
        res.cookie("token", token);
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ error: "Wrong Login Credentials" });
    }
});

router.post("/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});
module.exports = router;

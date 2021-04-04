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
        res.cookie("token", "");
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.post("/favorites/:team", auth, async (req, res) => {
    try {
        const team = req.params.team;
        if (req.user.favorites.length) {
            req.user.favorites = req.user.favorites.concat({ team });
        } else {
            req.user.favorites = [{ team }];
        }
        await req.user.save();
        res.status(201).send();
    } catch (e) {
        res.status(500).send();
    }
});

router.delete("/favorites/:team", auth, async (req, res) => {
    try {
        const team = req.params.team;
        req.user.favorites = req.user.favorites.filter((fav) => {
            return fav.team !== team;
        });
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/favorites/:team", auth, async (req, res) => {
    try {
        const team = req.params.team;
        req.user.favorites.map((fav) => {
            if (fav.team === team) {
                res.send(true);
            }
        });
        res.send(false);
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/favorites", auth, async (req, res) => {
    try {
        res.send(req.user);
    } catch (e) {
        res.status(500).send();
    }
});
module.exports = router;

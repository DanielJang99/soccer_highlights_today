const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "secretmsg");
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });
        if (!user) {
            res.send("not logged in");
        }
        console.log(token);
        res.send("logged in");
        next();
    } catch (e) {
        next();
    }
};

module.exports = auth;

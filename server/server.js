const express = require("express");
const port = process.env.PORT || 3080;
const dev = process.env.NODE_ENV !== "production";
require("./db/mongoose");
const userRouter = require("./routers/user");
const auth = require("./middleware/auth");

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
});

// app.prepare().then(() => {
//     const server = express();
//     server.use(express.json());
//     server.use("/users", userRouter);

//     server.get("*", auth, (req, res) => {
//         return handle(req, res);
//     });

//     server.listen(port, (err) => {
//         if (err) throw err;
//         console.log(`> Ready on http://localhost:${port}`);
//     });
// });

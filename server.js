// const express = require("express");
// const next = require("next");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const port = process.env.PORT;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const apiPaths = {
//     "/users": {
//         target: process.env.HOST,
//         pathRewrite: {
//             "^/users": "/users",
//         },
//         changeOrigin: true,
//     },
// };

// const isDevelopment = process.env.NODE_ENV !== "production";

// app.prepare()
//     .then(() => {
//         const server = express();
//         server.use(express.json());
//         server.use(express.urlencoded());
//         server.use("/users", createProxyMiddleware(apiPaths["/users"]));

//         server.all("*", (req, res) => {
//             return handle(req, res);
//         });

//         server.listen(port, (err) => {
//             console.log(process.env.HOST);
//             if (err) throw err;
//             if (isDevelopment) {
//                 console.log(`> Ready on http://localhost:${port}`);
//             } else {
//                 console.log("Ready on production server");
//             }
//         });
//     })
//     .catch((err) => {
//         console.log("Error:::::", err);
//         process.exit(1);
//     });

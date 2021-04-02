import React, { useState } from "react";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { Router } from "next/router";
import "nprogress/nprogress.css";
import Head from "next/head";

NProgress.configure({ easing: "ease", speed: 550 });
Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});
Router.events.on("routeChangeError", () => {
    NProgress.done();
});
export const AuthContext = React.createContext({
    auth: false,
    setAuth: (auth: boolean) => {},
});

function MyApp({ Component, pageProps }: AppProps) {
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <Head>
                <link rel="shortcut icon" href="favicon-16x16.png" />
            </Head>
            <div
                style={{
                    margin: "0 auto",
                }}
            >
                <Navbar />
                <Component {...pageProps} />
            </div>
        </AuthContext.Provider>
    );
}

export default MyApp;

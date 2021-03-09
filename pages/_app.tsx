import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { Router } from "next/router";
import "nprogress/nprogress.css";

NProgress.configure({ easing: "ease", speed: 300 });
Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});
Router.events.on("routeChangeError", () => {
    NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div
            style={{
                margin: "0 auto",
            }}
        >
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

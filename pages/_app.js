import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
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

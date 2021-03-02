import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Home from "../components/navbar";
import Top from "../components/top";
function MyApp({ Component, pageProps }) {
    return (
        <div style={{ margin: "0 auto" }}>
            <Top />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

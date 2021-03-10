import { Header } from "semantic-ui-react";
import Navbar from "./navbar";
export default function Top() {
    return (
        <div
            style={{
                display: "flex",
                paddingTop: "1.25rem",
                paddingLeft: "1.25rem",
            }}
        >
            <Navbar />
        </div>
    );
}

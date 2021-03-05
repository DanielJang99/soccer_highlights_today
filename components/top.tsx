import { Header } from "semantic-ui-react";
import Navbar from "./navbar";
export default function Top() {
    return (
        <div style={{ display: "flex", paddingTop: 20, paddingLeft: 20 }}>
            <Navbar />
        </div>
    );
}

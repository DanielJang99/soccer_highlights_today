import { Header } from "semantic-ui-react";
import Navbar from "./navbar";
export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20, paddingLeft: 20 }}>
                <div style={{ flex: "100px 0 0" }}>
                    <img
                        src="/images/football.png"
                        alt="logo"
                        style={{ display: "block", width: 80 }}
                    />
                </div>
                <Header>Soccer Highlights Today</Header>
            </div>
            <Navbar />
        </div>
    );
}

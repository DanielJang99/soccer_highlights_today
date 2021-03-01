import { Menu, Segment } from "semantic-ui-react";
import { useState } from "react";

export default function Navbar() {
    const [state, setState] = useState({ activeItem: "home" });
    const handleItemClick = (e, { name }) => setState({ activeItem: name });
    return (
        <div style={{ width: "98%", margin: "auto", paddingTop: 15 }}>
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name="home"
                        active={state.activeItem === "home"}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name="about"
                        active={state.activeItem === "about"}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name="admin"
                        active={state.activeItem === "admin"}
                        onClick={handleItemClick}
                    />
                </Menu>
            </Segment>
        </div>
    );
}

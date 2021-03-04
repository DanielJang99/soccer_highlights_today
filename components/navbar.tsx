import { Menu, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export default function Navbar() {
    const [state, setState] = useState({ activeItem: "home" });
    const router = useRouter();
    let activeItem;
    if (router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    } else if (router.pathname === "/admin") {
        activeItem = "admin";
    }
    const handleItemClick = (e, { name }) => {
        if (name == "home") {
            router.push("/");
        } else if (name == "about") {
            router.push("/about");
        }
    };
    return (
        <div style={{ width: "98%", margin: "auto", paddingTop: 15 }}>
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name="about"
                        active={activeItem === "about"}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name="admin"
                        active={activeItem === "admin"}
                        onClick={() => {
                            router.push("/admin");
                        }}
                    />
                </Menu>
            </Segment>
        </div>
    );
}

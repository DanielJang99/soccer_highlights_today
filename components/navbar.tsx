import { Menu, Segment, Dropdown, MenuItemProps } from "semantic-ui-react";
import { useState } from "react";
import { useRouter } from "next/router";
import SearchNav from "./SearchNav";
import axios from "axios";
import Cookies from "js-cookie";

export default function Navbar() {
    const [state, setState] = useState({ activeItem: "home" });
    const router = useRouter();
    let activeItem;
    if (router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    } else if (
        router.pathname === "/favorites/[team]" ||
        router.pathname === "/favorites/all"
    ) {
        activeItem = "favorites";
    } else if (router.pathname === "/leagues") {
        activeItem = "leagues";
    }
    const handleItemClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        { name }: MenuItemProps
    ) => {
        if (name == "home") {
            router.push("/");
        } else if (name == "about") {
            router.push("/about");
        } else if (name == "favorites") {
            if (!Cookies.get("token")) {
                return alert("You must be logged in");
            }
            router.push("/favorites");
        }
    };

    const handleLogout = () => {
        const url = process.env.HOST + "/users/logout";
        axios
            .post(url)
            .then((res) => {
                if (res.status === 200) {
                    router.push("/");
                }
            })
            .catch((e) => console.log(e));
    };

    return (
        <div style={{ margin: "auto" }}>
            <Segment>
                <Menu secondary size="large">
                    <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={handleItemClick}
                    >
                        <img src="/images/football.png" alt="logo" />
                        <div style={{ paddingLeft: "0.625rem" }}>
                            Soccer Highlights Today
                        </div>
                    </Menu.Item>
                    <Menu.Item
                        name="about"
                        active={activeItem === "about"}
                        onClick={handleItemClick}
                    />

                    <Dropdown
                        item
                        text="Competitions"
                        name="leagues"
                        active={activeItem === "leagues"}
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => {
                                    router.push("/leagues/15");
                                }}
                            >
                                English Premier League
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    router.push("/leagues/14");
                                }}
                            >
                                La Liga
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    router.push("/leagues/11");
                                }}
                            >
                                Bundesliga
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    router.push("/leagues/13");
                                }}
                            >
                                Serie A
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                        name="favorites"
                        active={activeItem === "favorites"}
                        onClick={handleItemClick}
                    />

                    <SearchNav />
                    {Cookies.get("token") ? (
                        <Menu.Item
                            position="right"
                            name="Log out"
                            onClick={handleLogout}
                        />
                    ) : (
                        <Menu.Item
                            position="right"
                            name="Log in"
                            onClick={() => {
                                router.push("/login");
                            }}
                        />
                    )}
                </Menu>
            </Segment>
        </div>
    );
}

import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { List, Header } from "semantic-ui-react";
import { LoadedMatches } from "../pages/index";

export default function CarouselFunction({ list }) {
    const [SelectedIndex, setSelectedIndex] = useState(0);
    const matches = useContext(LoadedMatches);

    const handleSelect = (selectedIndex, e) => {
        setSelectedIndex(selectedIndex);
    };

    const handleClick = (e, { index }) => {
        setSelectedIndex(index);
    };
    return (
        <div style={{ height: "83vh" }}>
            {list && (
                <div style={{ margin: "0 auto" }}>
                    <div
                        style={{
                            width: "60%",
                            paddingTop: 10,
                            float: "left",
                        }}
                    >
                        <Carousel
                            activeIndex={SelectedIndex}
                            onSelect={handleSelect}
                        >
                            {list.map((game) => {
                                return (
                                    <Carousel.Item>
                                        <Link
                                            href={`/view/${matches.indexOf(
                                                game
                                            )}`}
                                        >
                                            <a>
                                                <img
                                                    className="d-block w-100"
                                                    src={game.thumbnail}
                                                    alt="First slide"
                                                />
                                            </a>
                                        </Link>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </div>
                    <div
                        style={{
                            float: "left",
                            paddingLeft: 100,
                            paddingTop: 150,
                        }}
                    >
                        <Header size="huge">Big Games Today🔥</Header>
                        <List selection bulleted size="massive">
                            {list.map((game, index) => {
                                return (
                                    <List.Item
                                        index={index}
                                        active={SelectedIndex === index}
                                        onClick={handleClick}
                                    >
                                        {game.title}
                                    </List.Item>
                                );
                            })}
                        </List>
                    </div>
                </div>
            )}
        </div>
    );
}

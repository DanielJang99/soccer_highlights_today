import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { List, Header, ListItemProps } from "semantic-ui-react";
import { LoadedMatches, MatchProps } from "../pages/index";

interface ListProps {
    list: MatchProps[] | undefined;
}

export default function DisplayCarousel({ list }: ListProps) {
    const [SelectedIndex, setSelectedIndex] = useState<number>(0);
    const matches: MatchProps[] | null = useContext(LoadedMatches);

    const handleSelect = (
        selectedIndex: number,
        e: Record<string, unknown> | null | undefined
    ) => {
        setSelectedIndex(selectedIndex);
    };

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        { index }: ListItemProps
    ) => {
        setSelectedIndex(index);
    };
    return (
        <div>
            {list && (
                <div
                    style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}
                >
                    <div
                        style={{
                            paddingTop: 20,
                        }}
                    >
                        <Carousel
                            activeIndex={SelectedIndex}
                            onSelect={handleSelect}
                        >
                            {list.map((game: MatchProps) => {
                                return (
                                    <Carousel.Item>
                                        <Link
                                            href={`/view/${matches?.indexOf(
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

                    <div style={{ paddingLeft: 40, paddingTop: 100 }}>
                        <Header size="huge">Big Games Today 🔥</Header>
                        <List selection bulleted size="massive">
                            {list.map((game: MatchProps, index: number) => {
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

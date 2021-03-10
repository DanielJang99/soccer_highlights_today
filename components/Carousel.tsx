import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { List, Header, ListItemProps } from "semantic-ui-react";
import { LoadedMatches } from "../pages/index";
import MatchProps from "../api/interface";
import { MajorTeams } from "../FootballData";

export default function DisplayCarousel() {
    const [SelectedIndex, setSelectedIndex] = useState<number>(0);
    const matches: MatchProps[] | null = useContext(LoadedMatches);
    const list = matches
        ?.filter(
            (game) =>
                MajorTeams.includes(game.side1.name) ||
                MajorTeams.includes(game.side2.name)
        )
        .slice(0, 5);

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
                            paddingTop: "1.25rem",
                        }}
                    >
                        <Carousel
                            activeIndex={SelectedIndex}
                            onSelect={handleSelect}
                        >
                            {list.map((game: MatchProps, index) => {
                                return (
                                    <Carousel.Item key={index}>
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

                    <div
                        style={{ paddingLeft: "2.5rem", paddingTop: "6.25rem" }}
                    >
                        <Header size="huge">Major Games This Week 🔥</Header>
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

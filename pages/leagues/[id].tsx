import React from "react";
import { Divider, Header, Grid, Image } from "semantic-ui-react";
import { GetStaticProps } from "next";
import axios from "axios";
import styles from "../../styles/League.module.css";
import Link from "next/link";
import MatchProps from "../../api/interface";
import Head from "next/head";
import { useRouter } from "next/router";

interface Params {
    params: {
        id: string;
    };
}
interface GamesProps {
    Games: MatchProps[];
}

export default function League({ Games }: GamesProps) {
    const router = useRouter();
    if (Games) {
        const LeagueGames = Games.filter(
            (game) => game.competition.id.toString() === router.query.id
        );
        if (LeagueGames.length > 0) {
            return (
                <>
                    <Head>
                        <title>
                            {LeagueGames[0].competition.name.split(":")[1]}
                        </title>
                    </Head>
                    <div style={{ width: "90%", margin: "auto" }}>
                        <Header as="h2" style={{ paddingTop: "1.875rem" }}>
                            {LeagueGames[0].competition.name.split(":")[1]}
                        </Header>
                        <Divider />
                        <Grid columns={3}>
                            <Grid.Row>
                                {LeagueGames.map((game) => (
                                    <Grid.Column>
                                        <Link
                                            href={`/view/${Games.indexOf(
                                                game
                                            )}`}
                                        >
                                            <a>
                                                <div
                                                    className={
                                                        styles.HighlightDiv
                                                    }
                                                >
                                                    <Image
                                                        src={game.thumbnail}
                                                    />
                                                    <strong
                                                        style={{
                                                            fontSize:
                                                                "1.125rem",
                                                        }}
                                                    >
                                                        {game.title}
                                                    </strong>
                                                    <div>
                                                        {
                                                            game.date.split(
                                                                "T"
                                                            )[0]
                                                        }
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </Grid.Column>
                                ))}
                            </Grid.Row>
                        </Grid>
                    </div>
                </>
            );
        } else {
            return (
                <div style={{ width: "90%", margin: "auto" }}>
                    <Header>No matches available for this league</Header>
                </div>
            );
        }
        return <></>;
    }
    return <></>;
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await axios.get("https://www.scorebat.com/video-api/v1");
        const data: MatchProps[] = await res.data;
        return {
            props: {
                Games: data,
            },
            revalidate: 1,
        };
    } catch (e) {
        return {
            redirect: {
                destination: "/404",
                statusCode: 307,
            },
        };
    }
};

export const getStaticPaths = () => {
    return {
        fallback: true,
        paths: [
            { params: { id: "11" } },
            { params: { id: "13" } },
            { params: { id: "14" } },
            { params: { id: "15" } },
        ],
    };
};

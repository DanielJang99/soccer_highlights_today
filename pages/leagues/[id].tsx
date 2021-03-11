import React from "react";
import { Divider, Header, Grid, Image } from "semantic-ui-react";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import styles from "../../styles/League.module.css";
import Link from "next/link";
import MatchProps from "../../api/interface";
import Head from "next/head";
import { MajorLeagues } from "../../FootballData";

type Params = {
    params: {
        id: string;
    };
};
interface LeagueGameProps {
    LeagueGames: MatchProps[];
}

export default function League({ LeagueGames }: LeagueGameProps) {
    return (
        <>
            {LeagueGames && (
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
                                            href={`/view/${LeagueGames.indexOf(
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
            )}
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const LeagueID = context?.params?.id;
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps[] = await res.data.filter(
        (game: MatchProps) => game.competition.id.toString() == LeagueID
    );

    return {
        props: {
            LeagueGames: data,
        },
        revalidate: 300,
    };
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

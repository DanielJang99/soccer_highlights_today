import React, { useEffect, useState } from "react";
import { Divider, Header, Loader, Grid } from "semantic-ui-react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { MatchProps } from "../index";
import { useRouter } from "next/router";

interface LeagueGameProps {
    LeagueGames: MatchProps[];
}

export default function League({ LeagueGames }: LeagueGameProps) {
    return (
        <>
            <Grid columns={3}>
                <Grid.Row>
                    {LeagueGames.map((game) => (
                        <Grid.Column>
                            <div>
                                <img src={game.thumbnail} />
                            </div>
                            <div>
                                <strong style={{ fontSize: "18px" }}>
                                    {game.title}
                                </strong>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.req) {
        return {
            props: {
                match: [],
            },
        };
    }
    const id: number = Number(context?.params?.id);
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps[] = res.data.filter(
        (game: MatchProps) => game.competition.id === id
    );
    // const data: MatchProps[] = res.data
    return {
        props: {
            LeagueGames: data,
        },
    };
};

import React, { createContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import VideoList from "../components/VideoList";
import { Divider, Header, Loader } from "semantic-ui-react";
import DisplayCarousel from "../components/Carousel";
import { GetServerSideProps } from "next";

export interface MatchProps {
    competition: {
        name: string;
        id: number;
        url: string;
    };
    date: string;
    // embed: HTMLElement;
    embed: string;
    side1: {
        name: string;
        url: string;
    };
    side2: {
        name: string;
        url: string;
    };
    thumbnail: string;
    title: string;
    url: string;
}
// export interface HomeProps {
//     matches?: MatchProps[]
// }
export const LoadedMatches = createContext<MatchProps[] | null>(null);

export default function Home({ matches }: MatchProps[] | undefined) {
    const bigMathchesID = [15, 13, 14, 11];
    return (
        <LoadedMatches.Provider value={matches}>
            <div style={{ width: "90%", margin: "auto" }}>
                <Head>
                    <title>⚽ Soccer Highlights Today</title>
                </Head>
                <DisplayCarousel
                    list={matches
                        ?.filter((match: MatchProps) =>
                            bigMathchesID.includes(match.competition.id)
                        )
                        .slice(0, 4)}
                />

                <Header as="h2" style={{ paddingTop: 35 }}>
                    Latest Games
                </Header>
                <Divider />
                <VideoList />
            </div>
        </LoadedMatches.Provider>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps[] | undefined = await res.data;
    return {
        props: {
            matches: data,
        },
    };
};

import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import VideoList from "../components/VideoList";
import { Divider, Header, Loader } from "semantic-ui-react";
import CarouselFunction from "../components/Carousel";

export const LoadedMatches = React.createContext(null);

export default function Home({ matches }) {
    const bigMathchesID = [15, 13, 14, 11];
    return (
        <LoadedMatches.Provider value={matches}>
            <div style={{ width: "90%", margin: "auto" }}>
                <Head>
                    <title>⚽ Soccer Highlights Today</title>
                </Head>
                <CarouselFunction
                    list={matches
                        .filter((match) =>
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

export async function getServerSideProps() {
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data = res.data;
    return {
        props: {
            matches: data,
        },
    };
}

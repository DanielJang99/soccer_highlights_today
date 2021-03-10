import React, { createContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import VideoList from "../components/VideoList";
import { Divider, Header, Loader } from "semantic-ui-react";
import DisplayCarousel from "../components/Carousel";
import { GetServerSideProps } from "next";
import MatchProps from "../api/interface";

interface HomeProps {
    matches?: MatchProps[];
}
export const LoadedMatches = createContext<MatchProps[] | null>(null);

export default function Home({ matches }: HomeProps) {
    if (matches) {
        return (
            <LoadedMatches.Provider value={matches}>
                <div style={{ width: "90%", margin: "auto" }}>
                    <Head>
                        <title>Soccer Highlights Today</title>
                    </Head>
                    <DisplayCarousel />
                    <Header as="h2" style={{ paddingTop: "2.2rem" }}>
                        Latest Games
                    </Header>
                    <Divider />
                    <VideoList />
                </div>
            </LoadedMatches.Provider>
        );
    }
    return <Loader />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    if (!ctx.req) {
        return {
            props: {
                matches: [],
            },
        };
    }
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps[] | undefined = await res.data;
    return {
        props: {
            matches: data,
        },
    };
};

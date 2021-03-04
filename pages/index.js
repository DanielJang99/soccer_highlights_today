import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoList from "../components/VideoList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ matches }) {
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Head>
                <title>⚽ Soccer Highlights Today</title>
            </Head>
            <Header as="h2" style={{ paddingTop: 35 }}>
                Latest Games
            </Header>
            <Divider />
            <VideoList list={matches} />
        </div>
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

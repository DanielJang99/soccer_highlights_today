import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoList from "../components/VideoList";
import { Divider, Header, Loader } from "semantic-ui-react";
import CarouselFunction from "../components/Carousel";
import { match } from "assert";

export default function Home({ matches }) {
    // const bigMathchesID = [15, 13, 14, 11];
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Head>
                <title>⚽ Soccer Highlights Today</title>
            </Head>
            <CarouselFunction list={matches.slice(0, 3)} />
            <Header as="h2" style={{ paddingTop: 35 }}>
                Latest Games
            </Header>
            <Divider />
            <VideoList list={matches.slice(3)} />
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

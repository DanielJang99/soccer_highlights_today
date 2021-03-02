import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoList from "../components/VideoList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
    const [list, setList] = useState([]);
    const API_URL = "https://www.scorebat.com/video-api/v1";
    async function getData() {
        const res = await axios.get(API_URL);
        setList(res.data);
        console.log(list);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Head>
                <title>⚽ Soccer Highlights Today</title>
            </Head>
            <Header as="h2" style={{ paddingTop: 35 }}>
                Latest Games
            </Header>
            <Divider />
            <VideoList list={list} />
        </div>
    );
}

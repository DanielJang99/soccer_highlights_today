import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Match from "../../components/Match";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import { GetServerSideProps } from "next";
import { MatchProps } from "../index";

interface PostProps {
    match: MatchProps[];
}

const Post = ({ match }: PostProps) => {
    return (
        <>
            {match && (
                <>
                    <Head>
                        <title>{match[0].title}</title>
                    </Head>
                    <div style={{ width: "98%", margin: "0 auto" }}>
                        <Match match={match[0]} />
                    </div>{" "}
                </>
            )}
        </>
    );
};

export default Post;

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
    const data: MatchProps = res.data[id];
    return {
        props: {
            match: [data],
        },
    };
};
// export async function getStaticPaths() {
//     const res = await axios.get("https://www.scorebat.com/video-api/v1");
//     const data = res.data;
//     return {
//         paths: data.slice(0, 4).map((match, index) => ({
//             params: {
//                 id: index.toString(),
//             },
//         })),
//         fallback: true,
//     };
// }

// export async function getStaticProps(context) {
//     const id = context.params.id;
//     const res = await axios.get("https://www.scorebat.com/video-api/v1");
//     const data = res.data[id];
//     return {
//         props: {
//             match: data,
//         },
//     };
// }

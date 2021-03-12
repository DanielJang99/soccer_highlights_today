import React from "react";
import axios from "axios";
import Match from "../../components/Match";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import MatchProps from "../../api/interface";
import { MajorTeams } from "../../FootballData";

interface PostProps {
    match: MatchProps;
}

const Post = ({ match }: PostProps) => {
    return (
        <>
            {match && (
                <>
                    <Head>
                        <title>{match.title}</title>
                    </Head>
                    <div style={{ width: "98%", margin: "0 auto" }}>
                        <Match match={match} />
                    </div>{" "}
                </>
            )}
        </>
    );
};

export default Post;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     if (!context.req) {
//         return {
//             props: {
//                 match: [],
//             },
//         };
//     }
//     const id: number = Number(context?.params?.id);
//     const res = await axios.get("https://www.scorebat.com/video-api/v1");
//     const data: MatchProps = res.data[id];
//     return {
//         props: {
//             match: [data],
//         },
//     };
// };

export const getStaticProps: GetStaticProps = async (context) => {
    const id: number = Number(context?.params?.id);
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps = await res.data[id];
    return {
        props: {
            match: data,
        },
        revalidate: 1,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps[] = await res.data;
    const FilteredData: MatchProps[] = data
        .filter(
            (game: MatchProps) =>
                MajorTeams.includes(game.side1.name) ||
                MajorTeams.includes(game.side2.name)
        )
        .slice(0, 5);
    const paths = FilteredData.map((game: MatchProps) => {
        return { params: { id: data.indexOf(game).toString() } };
    });
    return {
        fallback: true,
        paths,
    };
};

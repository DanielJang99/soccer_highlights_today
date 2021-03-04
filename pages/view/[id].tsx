import axios from "axios";
import Match from "../../components/Match";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
const Post = ({ match }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader />;
    }
    return (
        <>
            {match && (
                <>
                    <Head>
                        <title>{match.title}</title>
                    </Head>
                    <div style={{ width: "98%", margin: "0 auto" }}>
                        <Match match={match} />
                    </div>
                </>
            )}
        </>
    );
};

export default Post;

// export async function getServerSideProps(context) {
//     const id = context.params.id;
//     const res = await axios.get("https://www.scorebat.com/video-api/v1");
//     const data = res.data[id];
//     return {
//         props: {
//             match: data,
//         },
//     };
// }
export async function getStaticPaths() {
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data = res.data;
    return {
        paths: data.slice(0, 4).map((match, index) => ({
            params: {
                id: index.toString(),
            },
        })),
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data = res.data[id];
    return {
        props: {
            match: data,
        },
    };
}

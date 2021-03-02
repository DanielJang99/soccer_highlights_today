import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Match from "../../components/Match";
const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const [match, setMatch] = useState({});

    const API_URL = "https://www.scorebat.com/video-api/v1";
    async function getData(id) {
        const res = await axios.get(API_URL);
        setMatch(res.data[id]);
    }
    useEffect(() => {
        getData(id);
    }, [getData, id]);
    return (
        <div style={{ width: "98%", margin: "0 auto" }}>
            <Match match={match} />
        </div>
    );
};

export default Post;

import axios from "axios";
import { useEffect, useState } from "react";
import FavDropDown from "../components/FavDropDown";

export default function Favorites({ games }) {
    const [options, setOptions] = useState([]);
    useEffect(async () => {
        const res = await axios.get("/users/favorites");
        const TeamData = await res.data.favorites;
        setOptions(TeamData);
    }, []);
    if (options) {
        return <FavDropDown options={options} games={games} />;
    }
    return <></>;
}

export const getServerSideProps = async () => {
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data = await res.data;
    return {
        props: {
            games: data,
        },
    };
};

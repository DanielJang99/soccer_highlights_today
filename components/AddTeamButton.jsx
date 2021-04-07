import { Button } from "semantic-ui-react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTeamButton({ team }) {
    const [isAdded, setIsAdded] = useState(false);
    const url = process.env.HOST + `/users/favorites/${team}`;
    useEffect(async () => {
        const res = await axios.get(url);
        setIsAdded(res.data);
    }, []);
    const handleAdd = () => {
        if (!Cookies.get("token")) {
            return alert("You must first log in ");
        }
        axios
            .post(url)
            .then((res) => {
                if (res.status === 201) {
                    setIsAdded(true);
                    return alert(`${team} has been added to your favorites!`);
                }
            })
            .catch((e) => {
                return alert(e);
            });
    };
    const handleRemove = () => {
        if (!Cookies.get("token")) {
            return alert("You must first log in ");
        }

        axios
            .delete(`/users/favorites/${team}`)
            .then((res) => {
                if (res.status === 200) {
                    setIsAdded(false);
                    return alert(
                        `${team} has been removed from your favorites.`
                    );
                }
            })
            .catch((e) => {});
    };
    return (
        <>
            {isAdded ? (
                <Button color="red" onClick={handleRemove}>
                    Remove from favorites
                </Button>
            ) : (
                <Button color="green" onClick={handleAdd}>
                    Add to favorites
                </Button>
            )}
        </>
    );
}

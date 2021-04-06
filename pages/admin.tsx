import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    async function checkLogin() {
        const response = await axios.get("/api/isLogin");
        if (response.status === 200 && response.data.name) {
            // LOGGED IN
            setIsLogin(true);
        } else {
            //  NOT LOGGED IN YET
            router.push("/login");
        }
    }
    useEffect(() => {
        checkLogin();
    }, []);

    function logout() {
        axios.get("/api/logout").then((res) => {
            if (res.status === 200) {
                router.push("/");
            }
        });
    }
    return (
        <>
            {isLogin && (
                <>
                    {" "}
                    This is a page for admin{" "}
                    <Button onClick={logout}>Logout</Button>{" "}
                </>
            )}
        </>
    );
}

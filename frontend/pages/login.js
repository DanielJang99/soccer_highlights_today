import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { AuthContext } from "./_app";

export default function Login() {
    const [username, setUsername] = useState("");
    const [ps, setPs] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePs = (e) => {
        setPs(e.target.value);
    };

    const router = useRouter();
    function login() {
        axios
            .post("/users/login", { username, password: ps })
            .then((res) => {
                if (res.status === 200) {
                    setAuth(true);
                    localStorage.setItem("token", res.data.token);
                    router.push("/");
                }
            })
            .catch((e) => {
                setErrorMsg("Wrong Credentials");
            });
    }
    function signUp() {
        router.push("/signup");
    }

    return (
        <div style={{ padding: "80px 0", textAlign: "center" }}>
            <Form>
                <div
                    style={{ color: "red", height: "20px", paddingBottom: 30 }}
                >
                    {errorMsg}
                </div>
                <Form.Field inline>
                    <input placeholder="username" onChange={handleUsername} />
                </Form.Field>
                <Form.Field inline>
                    <input
                        placeholder="password"
                        type="password"
                        onChange={handlePs}
                    />
                </Form.Field>
                <Button color="green" onClick={login}>
                    Login
                </Button>
            </Form>
            <div
                style={{ paddingTop: 15, color: "#4682B4", cursor: "pointer" }}
                onClick={signUp}
            >
                Not a user? Create an account to get started!
            </div>
        </div>
    );
}

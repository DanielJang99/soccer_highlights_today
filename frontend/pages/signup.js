import { Button, Form } from "semantic-ui-react";
import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "./_app";

export default function SignUp() {
    const { auth, setAuth } = useContext(AuthContext);
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [ps, setPs] = useState("");
    const [secondPs, setSecondPs] = useState("");
    const [warningMsg, setWarningMsg] = useState("");
    const usenameChangeHandler = (e) => {
        setUsername(e.target.value);
    };
    const psChangeHandler = (e) => {
        setPs(e.target.value);
    };
    const secondPsChangeHandler = (e) => {
        setSecondPs(e.target.value);
    };
    const createAccount = () => {
        if (username.length < 5 || ps.length < 5) {
            setWarningMsg(
                "Your username and password must be at least 5 characters"
            );
            return;
        } else if (ps !== secondPs) {
            setWarningMsg("You must re-enter the same password");
            return;
        }
        axios
            .post("/users", {
                username,
                password: ps,
            })
            .then((res) => {
                if (res.status === 201) {
                    setAuth(true);
                    router.push("/");
                }
            })
            .catch((e) => setWarningMsg(e));
    };
    return (
        <div style={{ padding: "100px 0", textAlign: "center" }}>
            <Form size="large">
                <Form.Field inline>
                    <input
                        placeholder="Username"
                        onChange={usenameChangeHandler}
                    />
                </Form.Field>
                <Form.Field inline>
                    <input
                        placeholder="Password"
                        type="password"
                        onChange={psChangeHandler}
                    />
                </Form.Field>
                <Form.Field inline>
                    <input
                        placeholder="Re-enter password"
                        type="password"
                        onChange={secondPsChangeHandler}
                    />
                </Form.Field>
                <Button color="green" onClick={createAccount} type="submit">
                    Create Account
                </Button>
                <div style={{ color: "red" }}>{warningMsg}</div>
            </Form>
        </div>
    );
}

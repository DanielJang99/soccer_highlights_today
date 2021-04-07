import { Button, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignUp() {
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
        const url = process.env.NEXT_PUBLIC_API_URL + "/users";
        axios
            .post(url, {
                username,
                password: ps,
            })
            .then((res) => {
                if (res.status === 201) {
                    console.log(res.cookie);
                    router.push("/");
                }
            })
            .catch((e) => console.log(e));
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

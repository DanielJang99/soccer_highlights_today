import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    function login() {
        axios.post("/api/login").then((res) => {
            if (res.status === 200) {
                router.push("/admin");
            }
        });
    }
    return (
        <div style={{ padding: "100px 0", textAlign: "center" }}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" />
                </Form.Field>
                <Form.Field inline>
                    <input placeholder="password" />
                </Form.Field>
                <Button color="green" onClick={login}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

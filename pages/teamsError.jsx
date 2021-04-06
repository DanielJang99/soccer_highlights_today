import { Divider, Header } from "semantic-ui-react";
export default function TeamsError() {
    return (
        <div
            style={{
                width: "90%",
                margin: "auto",
                paddingTop: 20,
            }}
        >
            <Header>Information for this team is not available. </Header>
            <Divider />
        </div>
    );
}

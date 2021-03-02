import { useEffect } from "react";
import parse from "html-react-parser";
import { Header } from "semantic-ui-react";

export default function Match({ match }) {
    if (match.embed) {
        return (
            <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                <Header
                    as="h2"
                    content={match.title}
                    subheader={match.competition.name}
                />{" "}
                <div style={{ width: "60%", height: "60%", margin: "0 auto" }}>
                    {parse(match.embed)}
                </div>
            </div>
        );
    }
    return <></>;
}

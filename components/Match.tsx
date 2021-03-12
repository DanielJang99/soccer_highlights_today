import parse from "html-react-parser";
import { Header } from "semantic-ui-react";
import MatchProps from "../api/interface";

interface SingleMatchProps {
    match: MatchProps;
}

export default function Match({ match }: SingleMatchProps) {
    return (
        <>
            {match.embed && (
                <div style={{ paddingTop: "0.625em", paddingLeft: "0.625em" }}>
                    <Header as="h2" content={match.title} floated="left" />
                    <Header
                        as="h2"
                        content={match.date.split("T")[0]}
                        subheader={match.competition.name}
                        floated="right"
                    />

                    <div
                        style={{
                            width: "60%",
                            height: "60%",
                            margin: "0 auto",
                            paddingTop: "6.5em",
                        }}
                    >
                        {parse(match.videos[0].embed)}
                    </div>
                </div>
            )}
        </>
    );
}

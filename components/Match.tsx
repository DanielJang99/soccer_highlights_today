import parse from "html-react-parser";
import { Header, Segment } from "semantic-ui-react";
import MatchProps from "../api/interface";

interface SingleMatchProps {
    match: MatchProps;
}

export default function Match({ match }: SingleMatchProps) {
    return (
        <>
            {match.embed && (
                <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                    <Header as="h2" content={match.title} floated="left" />
                    <Header
                        as="h2"
                        content={match.date.split("T")[0]}
                        subheader={match.competition.name}
                        floated="right"
                    />
                    {/* </Segment> */}

                    <div
                        style={{
                            width: "60%",
                            height: "60%",
                            margin: "0 auto",
                            paddingTop: 65,
                        }}
                    >
                        {parse(match.videos[0].embed)}
                    </div>
                </div>
            )}
        </>
    );
}

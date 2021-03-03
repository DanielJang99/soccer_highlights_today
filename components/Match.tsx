import { useEffect } from "react";
import parse from "html-react-parser";
import { Header, Flag } from "semantic-ui-react";

export default function Match({ match }) {
    return (
        <>
            {match.embed && (
                <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                    <Header
                        as="h2"
                        content={match.title}
                        subheader={match.competition.name}
                    />
                    <Header>
                        <Flag
                            name={match.competition.name
                                .split(":")[0]
                                .toLowerCase()}
                        />
                    </Header>
                    <div
                        style={{
                            width: "60%",
                            height: "60%",
                            margin: "0 auto",
                        }}
                    >
                        {parse(match.embed)}
                    </div>
                    <Flag
                        name={match.competition.name
                            .split(":")[0]
                            .toLowerCase()}
                    />
                </div>
            )}
        </>
    );
}

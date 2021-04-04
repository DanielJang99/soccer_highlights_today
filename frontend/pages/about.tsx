import { Container, Header, Segment } from "semantic-ui-react";
import Head from "next/head";
export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div style={{ paddingTop: 20, textAlign: "center" }}>
                <Header as="h1">About This Page</Header>
            </div>
            <div
                style={{
                    paddingTop: "1.25rem",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        maxWidth: "60ch",
                        fontSize: "1.5rem",
                        display: "inline-block",
                    }}
                >
                    <Container textAlign="justified">
                        Built with Next.js, boostrap, semantic-ui, MongoDb, and
                        Node.js, <b>Soccer Highlights Today</b> uses open-source
                        API from{" "}
                        <a href="https://www.scorebat.com/video-api">
                            Scorebat
                        </a>{" "}
                        to display the latest highlights from professional
                        football games around the world. These are official
                        videos embedded from the official channels of the
                        leagues or the teams. For more information and source
                        code, click{" "}
                        <a href="https://github.com/DanielJang99/soccer_highlights_today">
                            here
                        </a>{" "}
                        or the github icon to go to the repository for this
                        project.
                    </Container>
                    <a href="https://github.com/DanielJang99/soccer_highlights_today">
                        <img src="images/githubMark.png" height="130" />
                    </a>
                </div>
            </div>
            <div style={{ textAlign: "center", paddingTop: 50 }}>
                <Header as="h2">Feedback</Header>
                <div style={{ fontSize: "1.2rem" }}>
                    If you have any suggestions or inquires, please feel free to
                    contact{" "}
                    <a href="mailto: daniel.jang.0621@gmail.com">
                        me with an email :)
                    </a>
                </div>
            </div>
        </>
    );
}

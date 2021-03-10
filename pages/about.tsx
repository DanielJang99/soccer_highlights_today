import { Container, Header, Segment } from "semantic-ui-react";
import Head from "next/head";
export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                <Header as="h1">About This Page</Header>
            </div>
            <div style={{ paddingTop: 20, paddingLeft: 20, display: "flex" }}>
                <a href="https://github.com/DanielJang99/soccer_highlights_today">
                    <div>
                        <img src="images/githubMark.png" height="80" />
                    </div>
                </a>
                <div style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Container>
                        Built with Next.js, boostrap, and semantic-ui,{" "}
                        <b>Soccer Highlights Today</b> uses API from{" "}
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
                </div>
            </div>
            <div style={{ paddingLeft: 20, paddingTop: 50 }}>
                <Header as="h2">Feedback</Header>
                <div style={{ fontSize: 15 }}>
                    If you have any suggestions or inquires, please feel free to
                    contact <a href="mailto: daniel.jang.0621@gmail.com">me</a>{" "}
                    with an email :)
                </div>
            </div>
        </>
    );
}

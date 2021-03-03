import { Icon, Container } from "semantic-ui-react";
import Head from "next/head";
export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div style={{ paddingTop: 20, paddingLeft: 20, display: "flex" }}>
                <a href="https://github.com/DanielJang99/soccer_highlights_today">
                    <div>
                        <img src="images/githubMark.png" height="80" />
                    </div>
                </a>
                <div style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Container>
                        Built with Next.js and semantic-ui, this page uses API
                        from{" "}
                        <a href="https://www.scorebat.com">www.scorebat.com</a>{" "}
                        to display the latest highlights from professional
                        football games around the world. For the source code,
                        click the github icon to go to my github repository page
                        for this project.
                    </Container>
                </div>
            </div>
        </>
    );
}

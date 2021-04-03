import parse from "html-react-parser";
import { Header } from "semantic-ui-react";
import MatchProps from "../api/interface";
import styles from "../styles/Match.module.css";
import { useRouter } from "next/router";

interface SingleMatchProps {
    match: MatchProps;
}

export default function Match({ match }: SingleMatchProps) {
    const router = useRouter();
    const handleHomeClicked = () => {
        router.push(`/teams/${match.side1.name}`);
    };
    const handleAwayClicked = () => {
        router.push(`/teams/${match.side2.name}`);
    };
    return (
        <>
            {match.embed && (
                <div
                    style={{
                        paddingTop: "2em",
                        display: "grid",
                        gridTemplateColumns: "0.4fr 1.16fr",
                        width: "90%",
                        margin: "auto",
                    }}
                >
                    <div style={{ paddingTop: "5em" }}>
                        <div style={{ justifyItems: "center" }}>
                            <div className={styles.TeamDiv}>
                                <h1 onClick={handleHomeClicked}>
                                    Home: {match.side1.name}
                                </h1>
                            </div>
                            <div style={{ height: "1em" }}></div>
                            <div className={styles.TeamDiv}>
                                <h1 onClick={handleAwayClicked}>
                                    Away: {match.side2.name}
                                </h1>
                            </div>
                            <div style={{ height: "1em" }}></div>
                            <Header
                                as="h2"
                                subheader={match.date.split("T")[0]}
                                content={match.competition.name}
                            />
                        </div>
                    </div>

                    <div>{parse(match.videos[0].embed)}</div>
                </div>
            )}
        </>
    );
}

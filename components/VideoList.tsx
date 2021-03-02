import { Grid, Image } from "semantic-ui-react";
import styles from "./VideoList.module.css";
import Link from "next/link";

export default function VideoList({ list }) {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((match, index) => (
                        <Grid.Column key={index}>
                            <Link href={`/view/${index}`}>
                                <a>
                                    <div className={styles.HighlightDiv}>
                                        <Image
                                            src={match.thumbnail}
                                            alt="/images/football.png"
                                        />
                                        <div style={{ paddingTop: 5 }}>
                                            <strong
                                                style={{ fontSize: "18px" }}
                                            >
                                                {match.title}
                                            </strong>
                                            <p style={{ color: "#999" }}>
                                                {match.competition.name}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}

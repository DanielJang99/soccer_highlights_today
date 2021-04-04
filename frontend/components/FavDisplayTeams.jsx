import { Grid, Image } from "semantic-ui-react";
import Link from "next/link";
import styles from "./VideoList.module.css";
export default function FavDisplayTeams({ toDisplay, games }) {
    const SearchedGames = games.filter(
        (game) =>
            game.side1.name.toLowerCase().includes(toDisplay.toLowerCase()) ||
            game.side2.name.toLowerCase().includes(toDisplay.toLowerCase())
    );
    console.log(toDisplay);
    return (
        <Grid columns={3}>
            <Grid.Row>
                {SearchedGames.map((game) => (
                    <Grid.Column>
                        <Link href={`/view/${games.indexOf(game)}`}>
                            <a>
                                <div className={styles.HighlightDiv}>
                                    <Image src={game.thumbnail} />
                                    <strong
                                        style={{
                                            fontSize: "1.125rem",
                                        }}
                                    >
                                        {game.title}
                                    </strong>
                                    <div>{game.date.split("T")[0]}</div>
                                </div>
                            </a>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
}

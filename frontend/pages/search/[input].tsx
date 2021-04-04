import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import MatchProps from "../../api/interface";
import axios from "axios";
import Head from "next/head";
import { Divider, Grid, Header, Image } from "semantic-ui-react";
import Link from "next/link";
import styles from "../../styles/League.module.css";

interface GamesProps {
    games: MatchProps[];
}

export default function SearchQuery({ games }: GamesProps) {
    const router = useRouter();
    const SearchedQuery = router.query.query?.toString();

    if (games && SearchedQuery) {
        const SearchedGames = games.filter(
            (game) =>
                game.side1.name
                    ?.toLowerCase()
                    .includes(SearchedQuery.toLowerCase()) ||
                game.side2.name
                    ?.toLowerCase()
                    .includes(SearchedQuery.toLowerCase())
        );
        if (SearchedGames.length > 0) {
            return (
                <>
                    <Head>
                        <title>{`Search:${SearchedQuery}`}</title>
                    </Head>
                    <div style={{ width: "90%", margin: "auto" }}>
                        <Header as="h2" style={{ paddingTop: "1.875rem" }}>
                            {`${SearchedGames.length} result(s) for "${SearchedQuery}"`}
                        </Header>
                        <Divider />
                        <Grid columns={3}>
                            <Grid.Row>
                                {SearchedGames.map((game) => (
                                    <Grid.Column>
                                        <Link
                                            href={`/view/${games.indexOf(
                                                game
                                            )}`}
                                        >
                                            <a>
                                                <div
                                                    className={
                                                        styles.HighlightDiv
                                                    }
                                                >
                                                    <Image
                                                        src={game.thumbnail}
                                                    />
                                                    <strong
                                                        style={{
                                                            fontSize:
                                                                "1.125rem",
                                                        }}
                                                    >
                                                        {game.title}
                                                    </strong>
                                                    <div>
                                                        {
                                                            game.date.split(
                                                                "T"
                                                            )[0]
                                                        }
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </Grid.Column>
                                ))}
                            </Grid.Row>
                        </Grid>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Head>
                        <title>{`Search:${SearchedQuery}`}</title>
                    </Head>
                    <div style={{ width: "90%", margin: "auto" }}>
                        <Header as="h2" style={{ paddingTop: "1.875rem" }}>
                            {` No matched results for "${SearchedQuery}"`}
                        </Header>
                    </div>
                </>
            );
        }
    }

    return <></>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("https://www.scorebat.com/video-api/v1");
    const data: MatchProps[] = await res.data;
    return {
        props: {
            games: data,
        },
    };
};

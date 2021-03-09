import React, { useContext } from "react";
import { Grid, Image, Flag, FlagNameValues } from "semantic-ui-react";
import styles from "./VideoList.module.css";
import Link from "next/link";
import { LoadedMatches } from "../pages/index";

export default function VideoList() {
    const list = useContext(LoadedMatches);
    function GetCountryFlag(
        query: string | FlagNameValues
    ): boolean | FlagNameValues | string {
        if (query === "brasil") {
            return "br";
        } else if (query === "korea republic") {
            return "south korea";
        } else if (
            query.includes("champions league") ||
            query.includes("europa league")
        ) {
            return false;
        } else {
            return query;
        }
    }

    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list?.map((match, index) => (
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

                                            <div>
                                                {GetCountryFlag(
                                                    match.competition.name
                                                        .split(":")[0]
                                                        .toLowerCase()
                                                ) ? (
                                                    <Flag
                                                        name={GetCountryFlag(
                                                            match.competition.name
                                                                .split(":")[0]
                                                                .toLowerCase()
                                                        )}
                                                    />
                                                ) : (
                                                    <div
                                                        style={{
                                                            color: "#999",
                                                        }}
                                                    >
                                                        {match.competition.name
                                                            .split(":")[0]
                                                            .toLowerCase()}
                                                    </div>
                                                )}
                                                <div
                                                    style={{
                                                        color: "#999",
                                                    }}
                                                >
                                                    {
                                                        match.competition.name.split(
                                                            ":"
                                                        )[1]
                                                    }
                                                </div>
                                            </div>
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

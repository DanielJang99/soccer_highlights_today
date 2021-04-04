import React from "react";
import { MajorTeams } from "../../HardCodedData/FootballData";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";
import AddTeamButton from "../../components/AddTeamButton";
export default function Team({ data }) {
    if (data) {
        return (
            <>
                <Head>
                    <title>{data.strTeam}</title>
                </Head>
                <div
                    style={{
                        width: "90%",
                        margin: "auto",
                        paddingTop: 20,
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.7fr 0.3fr",
                        }}
                    >
                        <Header as="h1">{data.strAlternate}</Header>
                        <div style={{ justifyContent: "end" }}>
                            <AddTeamButton team={data.strTeam} />
                        </div>
                    </div>
                    <Divider />
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "0.5fr 1.5fr",
                            margin: "auto",
                        }}
                    >
                        <div>
                            <img
                                src={data.strTeamBadge}
                                alt="Badge image currently unavailable"
                                height="200"
                            />
                            <div style={{ height: "20px" }}></div>
                            <img
                                src={data.strTeamJersey}
                                alt="Jersey image currently unavailable"
                                height="200"
                            />
                        </div>
                        <div>
                            <div style={{ paddingTop: 10 }}>
                                {data.strDescriptionEN}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return <></>;
}

export async function getStaticProps(context) {
    try {
        const url =
            "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" +
            context.params.teamName;
        const res = await fetch(url);
        const data = await res.json();
        return {
            props: {
                data: data.teams[0],
            },
        };
    } catch (e) {
        return {
            redirect: {
                destination: "/404",
                statusCode: 307,
            },
        };
    }
}

export async function getStaticPaths() {
    const paths = MajorTeams.map((team) => ({
        params: {
            teamName: team,
        },
    }));
    return {
        paths,
        fallback: true,
    };
}

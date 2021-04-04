import { useRouter } from "next/router";

export default function FavoriteTeam() {
    const router = useRouter();
    const team = router.query.team;

    return (
        <div>
            <div>{team}</div>
        </div>
    );
}

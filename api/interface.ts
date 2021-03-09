export default interface MatchProps {
    competition: {
        name: string;
        id: number;
        url: string;
    };
    date: string;
    embed: string;
    side1: {
        name: string;
        url: string;
    };
    side2: {
        name: string;
        url: string;
    };
    thumbnail: string;
    title: string;
    url: string;
}

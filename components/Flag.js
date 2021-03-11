import React from "react";
import { Flag, FlagNameValues } from "semantic-ui-react";

function DisplayFlag({ country }) {
    function GetCountryFlag(query) {
        if (query === "brasil") {
            return "br";
        } else if (query === "korea republic") {
            return "south korea";
        } else if (
            query.includes("champions league") ||
            query.includes("europa league") ||
            query.includes("copa libertadores")
        ) {
            return false;
        } else {
            return query;
        }
    }

    return (
        <>
            {GetCountryFlag(country.toLowerCase()) ? (
                <Flag name={GetCountryFlag(country.toLowerCase())} />
            ) : (
                <div style={{ color: "#999" }}>{country}</div>
            )}
        </>
    );
}

export default DisplayFlag;

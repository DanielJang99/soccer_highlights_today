import { Dropdown, Divider } from "semantic-ui-react";
import { useEffect, useState } from "react";
import FavDisplayTeams from "./FavDisplayTeams";

export default function FavDropDown({ options, games }) {
    const [toDisplay, setToDisplay] = useState("usdfhgusfhgsdffgjisdhg8d");
    const handleClick = (team) => setToDisplay(team);
    return (
        <div style={{ width: "90%", margin: "auto", paddingTop: 40 }}>
            <div style={{ width: "10%" }}>
                {options && (
                    <Dropdown
                        item
                        text="Select Team"
                        name="g"
                        className="button icon"
                        fluid
                    >
                        <Dropdown.Menu>
                            {options.map((o) => (
                                <Dropdown.Item
                                    onClick={() => handleClick(o.team)}
                                >
                                    {o.team}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                )}
            </div>

            <Divider />
            <FavDisplayTeams toDisplay={toDisplay} games={games} />
        </div>
    );
}

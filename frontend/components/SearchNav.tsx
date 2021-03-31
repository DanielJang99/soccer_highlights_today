import { Menu, Input, Icon, InputOnChangeData } from "semantic-ui-react";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function SearchNav() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") {
            router.push(`/search/s?query=${query}`);
            setQuery("");
        }
    };
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        data: InputOnChangeData
    ) => {
        setQuery(data.value);
    };
    const handleClick = () => {
        router.push(`/search/s?query=${query}`);
        setQuery("");
    };
    return (
        <Menu.Menu>
            {/* <Menu.Menu position="right"> */}
            <Menu.Item name="search">
                <Input
                    icon
                    placeholder="Search for a team..."
                    type="text"
                    onChange={handleChange}
                >
                    <input onKeyDown={handleKeyDown} />
                    <Icon name="search" link={true} onClick={handleClick} />
                </Input>
            </Menu.Item>
        </Menu.Menu>
    );
}

import {Menu, MenuItem} from "@blueprintjs/core";
import React from "react";

export default function NavigationMenu() {
    return(
        <>
            <Menu style={{maxWidth: '200px'}} className={'public-sans'}>
                <MenuItem
                    icon={'home'}
                    text={'Home'}
                    onClick={() => window.location.href = 'http://localhost:3000'}
                />
                <MenuItem
                    icon={'code'}
                    text={'Projects'}
                    onClick={() => window.location.href = 'http://localhost:3000/projects'}
                />
                <MenuItem
                    icon={'star-empty'}
                    text={'skills'}
                    onClick={() => window.location.href = 'http://localhost:3000/skills'}
                />
            </Menu>
        </>
    )
}


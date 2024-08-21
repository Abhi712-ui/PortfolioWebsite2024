import {Alignment, Navbar, Button} from "@blueprintjs/core"
import "./Components.css"
import "../pages/Home.css"
import React from "react";
import {Popover} from "@blueprintjs/core";
import SocialMenu from "./SocialMenu";
import NavigationMenu from "./NavigationMenu";
function PortfolioNavbar() {
    return(
        <Navbar className={"header bp3-elevation-5 public-sans"}>
            <Navbar.Group align={Alignment.LEFT} style={{marginRight: '15px'}}>
                <Popover content={<NavigationMenu/>} position={'bottom-left'}>
                    <Button
                        icon={'menu'}
                        text={'Navigation'}
                        className={'bp5-minimal bp5-outlined bp5-intent-primary public-sans'}
                    />
                </Popover>
            </Navbar.Group>
            <Navbar.Group align={Alignment.LEFT}>
                <Popover content={<SocialMenu/>} position={'bottom-left'}>
                    <Button
                        icon="social-media"
                        text="Socials"
                        className={'bp5-minimal bp5-outlined bp5-intent-primary public-sans'}
                    />
                </Popover>
            </Navbar.Group>

        </Navbar>
    )
}

export default PortfolioNavbar;

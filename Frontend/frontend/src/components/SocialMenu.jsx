import React from 'react'
import {Menu, MenuItem} from "@blueprintjs/core";
function SocialMenu(){
    return(
        <>
            <Menu style={{maxWidth: '200px'}} className={'public-sans'}>
                <MenuItem
                    icon={'git-repo'}
                    text={'Github'}
                    onClick={() => window.open('https://github.com/Abhi712-ui', '_blank', 'noopener,noreferrer')}
                />
                <MenuItem
                    icon={'link'}
                    text={'LinkedIn'}
                    onClick={() => window.open('https://www.linkedin.com/in/abhimanyu-sharma-96a574230/', '_blank', 'noopener,noreferrer')}
                />
                <MenuItem
                    icon={'document-open'}
                    text={'Download My Resume'}
                    onClick={() => window.open('https://drive.google.com/file/d/13nwBn_Qui-o_ddfj1k3bIY1dd-u8Gjke/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                />
            </Menu>
        </>

    );
}
export default SocialMenu;

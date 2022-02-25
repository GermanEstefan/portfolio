import React from 'react'
import { NavMobile } from './NavMobile'
import { SocialMedias } from './SocialMedias'
import Media from 'react-media';
import { NavDesktop } from './NavDesktop';
import { mediaQuerys } from '../../helpers/mediaQuerys';




export const Header = () => {

    return (
        <header>
            <SocialMedias />
            <Media queries={mediaQuerys}>
                {
                    matches => (
                        <>
                            {matches.small && <NavMobile />}
                            {matches.medium && <NavDesktop/>}
                            {matches.large && <NavDesktop/>}
                        </>
                    )
                }
            </Media>
        </header >
    )
}

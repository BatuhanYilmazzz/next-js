import React from 'react';
import { HeaderStyled } from '../../styles';
import SocialLinks from '../SocialLinks';

const Header = () => {
    return (
        <HeaderStyled>
            <h2>
                AHMET BATUHAN <br />
                YILMAZ
            </h2>
            <SocialLinks />
            <img src="/images/header.svg" alt="" />
        </HeaderStyled>
    );
};

export default Header;

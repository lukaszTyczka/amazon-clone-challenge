import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <HeaderLogo>
                <img src={'https://i.imgur.com/7I9Was5.png'} />
            </HeaderLogo>
            <HeaderOptionAddress>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select your addres</OptionLineTwo>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
            </HeaderSearch>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    color: white;
`;

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`;

const HeaderOptionAddress = styled.div``;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div``;

const HeaderSearch = styled.div``;

const HeaderSearchInput = styled.input``;

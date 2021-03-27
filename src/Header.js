import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={'https://i.imgur.com/7I9Was5.png'} />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your addres</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Nazariy</OptionLineOne>
                    <OptionLineTwo>Account & lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>4</CartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`;

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div``;

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`;

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    :focus {
        border: none;
    }
`;

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderNavItems = styled.div`
    display: flex;
`;
const HeaderOption = styled.div`
    padding: 10px 9px;
`;
const HeaderOptionCart = styled.div`
    display: flex;
    a {
        align-items: center;
        padding-right: 9px;
        display: flex;
        text-decoration: none;
        color: white;
    }
`;

const CartCount = styled.div`
    padding-left: 4px;
`;

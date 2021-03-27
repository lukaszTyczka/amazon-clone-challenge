import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <Container>
            <Tittle>Ipad pro</Tittle>
            <Price>$1449</Price>
            <Rating>⭐⭐⭐⭐⭐</Rating>
            <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/rfb-ipad-pro10in-silver-cellular-2017?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1582330360714" />
            <ActionSection>
                <AddToCartButton>Add to cart</AddToCartButton>
            </ActionSection>
        </Container>
    );
}

export default Product;

const Container = styled.div`
    background-color: white;
    z-index: 2;
    flex: 1;
    padding: 20px;
    margin: 10px;
    height: 300px;
    display: flex;
    flex-direction: column;
`;

const Tittle = styled.span``;
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`;
const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`;
const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    gap: 3%;

    ${mobile({ flexDirection: "column", padding: "20px"})};

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: "80vh"})};


`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h2`
    letter-spacing: 2px;
    font-size: 40px;
    font-weight: 100;
    color: #333;
    margin: 0;
`;

const Desc = styled.p`
    color: #444;
    line-height: 1.7;
    letter-spacing: 1px;
`;

const Price = styled.span`
    font-size: 35px;
    font-weight: 100;
    display: block;
    margin-top: 25px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
    margin-top: 25px;

`;

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterTitle = styled.h3`
    margin-right: 10px;
    font-weight: 300;
    font-size: 20px;
`;

const FilterColor = styled.div`
    width: 25px;
    height: 25px;
    background: ${props => props.color};
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;

    ${mobile({ width: "20px", height: "20px", marginRight: "5px"})};

`;

const SelectSizes = styled.select`
    padding: 5px 8px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`;

const OptionSizes = styled.option`

`;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 25px;
    ${mobile({ width: "100%"})};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #008080;
    min-width: 25px;
    min-height: 25px;
    border-radius: 5px;
    margin: 0 10px;
    font-weight: bold;
    font-size: 19px;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    background: white;
    border: 2px solid teal;
    border-radius: 4px;
`;

export default function SingleProduct() {

    const [num, setNum] = useState(0)
    
  return (
    <Container>
        <Wrapper>
            <ImgContainer>
            <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <SelectSizes>
                        <OptionSizes>XS</OptionSizes>
                        <OptionSizes>S</OptionSizes>
                        <OptionSizes>M</OptionSizes>
                        <OptionSizes>L</OptionSizes>
                        <OptionSizes>XL</OptionSizes>
                    </SelectSizes>
                </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <i class="fas fa-minus" onClick={() => setNum(num > 0 ? num - 1 : 0)} style={{cursor: "pointer"}}></i>
                        <Amount>{num}</Amount>
                        <i className="fas fa-plus"  onClick={() => setNum(num + 1)} style={{cursor: "pointer"}}></i>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  );
}

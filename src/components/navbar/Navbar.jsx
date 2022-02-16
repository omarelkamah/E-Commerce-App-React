import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Badge from '@mui/material/Badge';
import {mobile} from '../../responsive';

const Container = styled.div`
    min-height: 70px;f
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    ${mobile({ padding: "20px 10px"})}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Lang = styled.span`
    flex: 1;
    align-items: center;
    text-align: center;
    cursor: pointer;
    color: #333;
    font-weight: bold;
    margin-right: 15px;
    ${mobile({display : "none"})}
`;

const SearchContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
    ${mobile({width : "85px"})}
`;

const Input = styled.input`
    flex: 1;
    height: 100%;
    padding: 7px;
    border: none;
    outline:none;
    ${mobile({width : "57px"})}
`;

const Center = styled.div`
    flex: 8;
    text-align: center;
`;

const Logo = styled.h2`
    margin: 0;
    color: #333;
    letter-spacing: 1px;
    text-transform: capitalize;
    ${mobile({display : "none"})}
`;

const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    text-transform: uppercase;
    margin-right: 15px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    ${mobile({fontSize: "14px", fontWeight: "normal", marginRight: "10px", width: "51px"})}

`;

function Navbar() {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Lang>EN</Lang>
                  <SearchContainer>
                      <Input placeholder="Search" />
                      <i className="fas fa-search" style={{ color: "gray", fontSize: 16, marginRight : 10 }}></i>
                  </SearchContainer>
              </Left>
              <Center>
                  <Logo>
                      <Link to="/" className='theLink'>E-Commerce App.</Link>
                  </Logo>
              </Center>
              <Right>
                  <Item>
                      <Link to="/register"  className="theLink">rigister</Link>
                  </Item>
                  <Item>
                      <Link to="/login" className="theLink">sigin in</Link>
                  </Item>
                    <Item>
                        {/* <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge> */}
                    </Item>
              </Right>
          </Wrapper>
      </Container>
  );
}

export default Navbar;

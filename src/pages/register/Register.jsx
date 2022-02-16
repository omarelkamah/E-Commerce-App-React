import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
    width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 50%;
    background: white;
    border-radius: 10px;
    padding: 20px;

    ${mobile({width: "100%", margin: "10px"})};

`;

const Title = styled.h2`
    margin-top: 10px;
    font-weight: 300;
    letter-spacing: 2px;
`;

const Form = styled.form`

`;

const Input = styled.input`
    width: 48%;
    padding: 15px 10px;
    margin-bottom: 15px;
    margin-left: 2%;
    outline: none;
    border: 1px solid #777;
    border-radius: 5px;
    ${mobile({width: "100%",padding: "10px"})};


`;

const Desc = styled.p`
    letter-spacing: 1px;
    line-height: 1.7;
    color: #333;
    font-weight: 500;
    margin-top: 6px;

    ${mobile({fontSize: "15px"})};
`;

const Button = styled.button`
    cursor: pointer;
    padding: 12px 40px;
    border: none;
    outline: none;
    letter-spacing: 1px;
    font-weight: bold;
    color: white;
    background: teal;
    border-radius: 5px;
    font-size: 16px;
`;

export default function Register() {
  return (
      <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Desc>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Desc>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      </Container>
  );
}

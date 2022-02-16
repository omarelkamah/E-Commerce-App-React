// import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Toper from '../../components/toper/Toper';
import { mobile } from '../../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    color: #333;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    ${mobile({padding: "0 10px"})};
    
`;

const TopButton = styled.button`
    padding: 10px 20px;
    font-weight: bold;
    background: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" ? "white" : "black"};
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;

    ${mobile({padding: "10px 5px"})};

`;

const TopTexts = styled.div`
    ${mobile({display: "none"})};
`;

const TopText = styled.span`
    margin-right: 10px;
    text-decoration: underline;
    letter-spacing: 1px;
    color: teal;
`;



const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2%;
    padding: 30px;
    margin-top: 30px;

    ${mobile({padding: "15px", flexDirection: "column"})};

`;

const ProductInfo = styled.div`
    flex: 2;
`;

const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ flexDirection: "column", background: "#eee", margin: "20px 0"})};

`;

const ProductDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({ flexDirection: "column"})};

`;

const Image = styled.img`
    width: 200px;
    margin-right: 30px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({ alignItems: "center"})};

`;

const ProductName = styled.span`
    margin-bottom: 15px;
`;

const ProductId = styled.span`
    margin-bottom: 15px;
`;

const ProductColor = styled.span`
    margin-bottom: 15px;
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    border-radius: 50%;
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20vh;
    align-items: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.span`
    font-size: 30px;
    font-weight: 500;
    margin: 0 5px;
`;

const ProductPrice = styled.span`
    font-size: 30px;
    color: #333;
`;

const Summary = styled.div`
    flex: 1;
        padding: 20px;
    height: 70vh;
    border: 1px solid teal;
    border-radius: 5px;
`;

const TitleSummary = styled.h2`
    font-size: 35px;
    font-weight: 200;
    margin-top: 14px;
    letter-spacing: 2px;
`;

const SummaryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    font-weight: ${props => props.type === "total" && "bold"};
    font-size: ${props => props.type === "total" && "25px"};
`;

const SummaryItemText = styled.div`

`;

const SummaryItemPrice = styled.div`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: black;
    color: white;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: 40px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export default function Cart() {
  return (
      <Container>
          <Navbar />
          <Toper />
          <Wrapper>
            <Title>YOUR BAG.</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <ProductInfo>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 93813718293
                                </ProductId>
                                <ProductColor color="black" />
                                <ProductSize>
                                    <b>Size:</b> 37.5
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <i class="fas fa-minus" style={{cursor: "pointer"}}></i>
                                <ProductAmount>2</ProductAmount>
                                <i class="fas fa-plus" style={{cursor: "pointer"}}></i>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                    <ProductDetail>
                        <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                        <Details>
                            <ProductName>
                                <b>Product:</b> HAKURA T-SHIRT
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 93813718293
                            </ProductId>
                            <ProductColor color="gray" />
                            <ProductSize>
                                <b>Size:</b> M
                            </ProductSize>
                        </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <i class="fas fa-minus" style={{cursor: "pointer"}}></i>
                            <ProductAmount>1</ProductAmount>
                            {/* <Add  style={{cursor: "pointer"}} /> */}
                                <i class="fas fa-plus" style={{cursor: "pointer"}}></i>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </ProductInfo>
                <Summary>
                    <TitleSummary>ORDER SUMMARY</TitleSummary>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
          </Wrapper>
          <Footer />
      </Container>
  );
}

// import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
// import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";


const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 21%);
    border-radius: 5px;
    opacity: 0;
    transition: .5s; 
`;

const Container = styled.div`
    width: 23%;
    background-color: #f5fbfd;
    margin: 10px;
    padding: 20px;
    position: relative;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;

    ${mobile({width : "100%"})};

    &:hover ${InfoContainer} {
        opacity: 1;
    }
`

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
`

const Icon = styled.div`
    background: #000000e3;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: scale(1.1)
    }
`;

export default function Product({item}) {
  return (
      <Container>
          <ImgContainer>
            <Img src={item.img} />
          </ImgContainer>
          <InfoContainer>
              <Icon>
                  <Link to="/cart" className="theLink">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
            </Icon>
            <Icon>
                <i className="fas fa-search"></i>
            </Icon>
            <Icon>
                <i className="fas fa-heart"></i>
            </Icon>
          </InfoContainer>
      </Container>
  );
}

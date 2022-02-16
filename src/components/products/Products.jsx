import styled from "styled-components";
import {popularProducts} from '../../Data';
import Product from "../product/Product";

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Products() {
  return (
      <Container>
          {popularProducts.map(item => (
              <Product item={item} key={item.id}/>
          ))}
      </Container>
  );
}

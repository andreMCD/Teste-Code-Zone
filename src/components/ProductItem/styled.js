import styled from "styled-components";
import media from "styled-media-query";

export const ProductItemWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0.5rem 0;

  ${media.lessThan("large")`
        flex-flow: column;
        justify-content: center;
        align-items: center;
    `}
`;
export const ProductItemList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  padding: 0 0.5rem;
  color: #8899a6;

  ${media.lessThan("large")`
        flex-flow: column;
        justify-content: center;
        align-items: center;
    `}
`;
export const ProductItemListItens = styled.li`
  width: 20%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  padding: 0 0.5rem;
  border-left: 1px solid #8899a6;

  ${media.lessThan("large")`
  width: 100%;
  align-items: center;
  padding: 1rem 0;
  border-left: none;
  border-bottom: 1px solid #8899a6;
    `}
`;

export const ProductItemTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ProductItemValor = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
`;

import React from "react";
import productList from "./content";

import { Title } from "../Contents/styled";

import * as S from "./styled";

const ProductItem = () => (
  <S.ProductItemWrapper>
    <Title>Produtos</Title>
    <S.ProductItemList>
      {productList.map((produto, i) => (
        <S.ProductItemListItens key={i}>
          <S.ProductItemTitle>{produto.title}</S.ProductItemTitle>
          <S.ProductItemValor>{produto.price}</S.ProductItemValor>
        </S.ProductItemListItens>
      ))}
    </S.ProductItemList>
  </S.ProductItemWrapper>
);

export default ProductItem;

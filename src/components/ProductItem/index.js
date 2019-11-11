import React from 'react'
import productList from './content'

import * as S from './styled'

const ProductItem = () => (
    <S.ProductItemWrapper>
        <S.ProductItemList>
            {productList.map((produto, i) => (
                <S.ProductItemListItens key={i}>
                    <S.ProductItemTitle >{produto.title}</S.ProductItemTitle>
                    <S.ProductItemValor>{produto.price}</S.ProductItemValor>
                </S.ProductItemListItens>   
            ))}
        </S.ProductItemList>
        
    </S.ProductItemWrapper>
)

export default ProductItem
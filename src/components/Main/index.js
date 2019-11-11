import React from 'react'
import PostItem from '../PostItem/index'
import JobsItem from '../JobsItem'
import ProductItem from '../ProductItem'

import * as S from './styled'

const Main = () => (
    <S.MainWrapper>
        <PostItem 
            slug="/posts/"
            title="Titulo do Post"
            date="17 de Maio de 2019"
            timeToRead="5"
            description="Essa é uma descrição do texto"
        />
        <JobsItem/>
        <ProductItem/>
    </S.MainWrapper>
)

export default Main
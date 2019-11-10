import React from 'react'

import Header from '../Header/index'
import Caroussel from '../Caroussel/index'

import GlobalStyles from '../../styles/global'
import * as S from './styled'


const Layout = () => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles/>
            <Header/>
            <Caroussel/>
        </S.LayoutWrapper>
    )
}

export default Layout

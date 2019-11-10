import React from 'react'

import Header from '../Header/index'
import Caroussel from '../Caroussel/index'
import Main from '../Main'
import Footer from '../Footer'

import GlobalStyles from '../../styles/global'
import * as S from './styled'


const Layout = () => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles/>
            <Header/>
            <Caroussel/>
            <Main/>
            <Footer/>
        </S.LayoutWrapper>
    )
}

export default Layout

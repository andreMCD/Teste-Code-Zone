import React from 'react'
import MenuLinks from '../MenuLinks/index'
import { Title } from '../Content/styled'


import * as S from './styled'

const Header = () => (
    <S.HeaderWrapper>
        <Title>Code Zone</Title>
        <MenuLinks/>
    </S.HeaderWrapper>
)

export default Header
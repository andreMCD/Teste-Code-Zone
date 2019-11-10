import React from 'react'
import MenuLinks from '../MenuLinks/index'

import * as S from './styled'

const Header = () => (
    <S.HeaderWrapper>
        <S.Title>Code Zone</S.Title>
        <MenuLinks/>
    </S.HeaderWrapper>
)

export default Header
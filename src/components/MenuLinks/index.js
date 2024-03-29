import React from 'react'

import links from './content'

import * as S from './styled'

const MenuLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink href={link.url} ClassName="active">{link.label}</S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default MenuLinks
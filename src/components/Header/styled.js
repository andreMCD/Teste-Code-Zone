import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.header`
    grid-area: head;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;

    ${media.lessThan('large')`
        flex-flow: column;
       justify-content: center; 
    `}
`
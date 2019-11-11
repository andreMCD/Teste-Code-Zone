import styled from 'styled-components'
import media from 'styled-media-query'

export const MainWrapper = styled.section`
    grid-area: main;
    display: flex;
    flex-flow: column;
    padding: .5rem 0;

    background: #404040;

    ${media.lessThan('large')`
        padding: 0;
    `}
`
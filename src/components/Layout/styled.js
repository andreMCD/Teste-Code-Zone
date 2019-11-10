import styled from 'styled-components'

export const LayoutWrapper = styled.section`
 display: grid;
 grid-template: 
    'head head' 20%
    'aside main' 70%
    'footer footer' 10%
    / 300px 1fr; 
 width: 100vw;
 height: 100vh;
 background: #222831;
`
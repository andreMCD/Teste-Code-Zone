import styled from "styled-components";
import media from "styled-media-query";

export const LayoutWrapper = styled.section`
  display: grid;
  grid-template:
    "head head" 20%
    "aside main" 70%
    "footer footer" 10%
    / 400px 1fr;
  width: 100vw;
  height: 100vh;
  background: #222831;

  ${media.lessThan("large")`
   display: flex;
   flex-flow: column;
 `}
`;

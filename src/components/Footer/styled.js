import styled from "styled-components";
import media from "styled-media-query";

export const FooterWrapper = styled.footer`
  grid-area: footer;
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 2rem 0;

  ${media.lessThan("large")`
  height: 400px;
    `}
`;

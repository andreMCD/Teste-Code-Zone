import styled from "styled-components";
import media from "styled-media-query";

export const Title = styled.h1`
  color: #00adb5;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  padding: 0 2rem;
  color: #8899a6;

  ${media.lessThan("large")`
      padding: 0 .5rem;
    `}
`;

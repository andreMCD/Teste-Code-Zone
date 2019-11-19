import styled from "styled-components";
import media from "styled-media-query";

export const PostItemWrapper = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-around;

  ${media.lessThan("large")`
        flex-flow: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const PostItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0.5rem 1rem;
  margin: 0 0 1rem 0;
  border-left: 1px solid #8899a6;
  color: #8899a6;

  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
  cursor: pointer;

  ${media.lessThan("large")`
        width: 100vw;
        justify-content: center;
        align-items: center;
        border-left: none;
        border-bottom: 1px solid #8899a6;
        padding: 0;
    `}
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;

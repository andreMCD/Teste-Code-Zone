import styled from "styled-components";
import media from "styled-media-query";

export const JobsItemWrapper = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: column;
  padding: 2rem 0;
  border-top: 1px solid #1fa1f2;
  border-bottom: 1px solid #1fa1f2;

  ${media.lessThan("large")`
        height: 300px;
        border: none;
        border-bottom: 1px solid #1fa1f2;
    `}
`;

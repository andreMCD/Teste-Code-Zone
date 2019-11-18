import styled from "styled-components";
import media from "styled-media-query";

export const JobsItemWrapper = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: column;
  padding: 2rem 0;

  background: #fff;

  ${media.lessThan("large")`
        height: 300px;
    `}
`;

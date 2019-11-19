import styled from "styled-components";

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
`;
export const MenuLinksItem = styled.li`
  padding: 0 0.5rem;

  .active {
    color: #1fa1f2;
    border-bottom: 1px solid #1fa1f2;
  }
`;
export const MenuLinksLink = styled.a`
  color: #00adb5;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1d2029;
  }
`;

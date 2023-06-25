import styled from "styled-components";

export const DefaultLayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

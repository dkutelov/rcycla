import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

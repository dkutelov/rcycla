import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../context/language/language.context";

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const {
    state: { languages },
  } = useContext(LanguageContext);
  let { login } = languages;

  return <Title>{login}</Title>;
}

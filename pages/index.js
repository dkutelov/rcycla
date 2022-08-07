import { Container } from "@lib/theme";
import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../context/language/language.context";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export default function Home() {
  const {
    state: { languages },
  } = useContext(LanguageContext);
  let { offers } = languages;

  return (
    <Container>
      <ContentWrapper>
        <Image
          src="/images/under-construction-icon.jpeg"
          width={600}
          height={600}
          alt="Under construction"
        />
      </ContentWrapper>
    </Container>
  );
}

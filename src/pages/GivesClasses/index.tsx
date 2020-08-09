import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Background,
  Title,
  Description,
  BoxButton,
  TextButton,
  Button,
} from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";

export default function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }
  return (
    <Container>
      <Background source={giveClassesBgImage} resizeMode="contain">
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar você precisa se cadastrar como professor na nossa
          plataforma web
        </Description>
      </Background>
      <BoxButton>
        <Button onPress={handleNavigateBack}>
          <TextButton>Tudo bem</TextButton>
        </Button>
      </BoxButton>
    </Container>
  );
}

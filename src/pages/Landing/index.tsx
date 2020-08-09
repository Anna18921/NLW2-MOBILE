import React from "react";
import {
  Container,
  Logo,
  Icon,
  Title,
  TitleBold,
  BoxButton,
  Button,
  TextButton,
  TotalConnections,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/landing.png";
import iconStudy from "../../assets/images/icons/study.png";
import iconClasses from "../../assets/images/icons/give-classes.png";
import iconHeart from "../../assets/images/icons/heart.png";
export default function Landing() {
  const navigation = useNavigation();

  function handleNavigationtoGiveClassesPage() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigationStudy() {
    navigation.navigate("Study");
  }
  return (
    <Container>
      <Logo source={logo} style={{ resizeMode: "contain" }} />
      <Title>
        Seja bem vindo {"\n"}
        <TitleBold> O que deseja fazer?</TitleBold>
      </Title>
      <BoxButton>
        <Button
          onPress={handleNavigationStudy}
          style={{ backgroundColor: "#9871f5" }}
        >
          <Icon source={iconStudy} />
          <TextButton>Estudar</TextButton>
        </Button>
        <Button
          onPress={handleNavigationtoGiveClassesPage}
          style={{ backgroundColor: "#04d361" }}
        >
          <Icon source={iconClasses} />
          <TextButton>Dar aulas</TextButton>
        </Button>
      </BoxButton>
      <TotalConnections>
        Total de 200 conexões já realizadas <Icon source={iconHeart} />
      </TotalConnections>
    </Container>
  );
}

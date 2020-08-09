import React from "react";
import {
  Container,
  BoxProfile,
  Avatar,
  Description,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  BoxButtons,
  Button,
  TextButton,
  Icon,
  Value,
  FavoriteButton,
  ContactButton,
} from "./styles";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";

export default function TeacherItem() {
  return (
    <Container>
      <BoxProfile>
        <Avatar source={{ uri: "http://github.com/Anna18921.png" }} />
        <Description>
          <Name>Anna Rafaela</Name>
          <Subject>Algoritmos</Subject>
        </Description>
      </BoxProfile>
      <Bio>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </Bio>
      <Footer>
        <Price>
          Preço/Hora{"  "}
          <Value>R$ 20,00</Value>
        </Price>
        <BoxButtons>
          <FavoriteButton>
            <Icon source={heartOutlineIcon} />
          </FavoriteButton>
          <ContactButton>
            <Icon source={whatsapp} />
            <TextButton>Entrar em Contato</TextButton>
          </ContactButton>
        </BoxButtons>
      </Footer>
    </Container>
  );
}

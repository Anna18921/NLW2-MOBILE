import React, { useState } from "react";
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
  TextButton,
  Icon,
  Value,
  FavoriteButton,
  ContactButton,
} from "./styles";
import { Linking } from "react-native";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";
import AsyncStora from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ favorited, teacher }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleContactWhatsApp() {
    api.post("connections", {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <BoxProfile>
        <Avatar source={{ uri: teacher.avatar }} />
        <Description>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </Description>
      </BoxProfile>
      <Bio>{teacher.bio}</Bio>
      <Footer>
        <Price>
          Preço/Hora{"  "}
          <Value>R$ {teacher.cost}</Value>
        </Price>
        <BoxButtons>
          <FavoriteButton
            style={{ backgroundColor: isFavorited ? "#ff3333" : "#8257e5" }}
            onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Icon source={unfavoriteIcon} />
            ) : (
              <Icon source={heartOutlineIcon} />
            )}
          </FavoriteButton>
          <ContactButton onPress={handleContactWhatsApp}>
            <Icon source={whatsapp} />
            <TextButton>Entrar em Contato</TextButton>
          </ContactButton>
        </BoxButtons>
      </Footer>
    </Container>
  );
};

export default TeacherItem;

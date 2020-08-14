import React, { useState } from "react";
import { Container, Name, Load, ViewLoad } from "./styles";
import PageHeader from "../../components/PageHeader";
import { ScrollView } from "../TeacherList/styles";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [load, setLoad] = useState(true);
  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritesList = JSON.parse(response);
        setFavorites(favoritesList);
      }
    });
    setLoad(false);
  }
  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      {load && (
        <ViewLoad>
          <Load size="large" color="" />
        </ViewLoad>
      )}
      {!(favorites.length > 0) && (
        <ViewLoad>
          <Name>Ops, não há nenhum Proffy favoritado :( </Name>
        </ViewLoad>
      )}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </Container>
  );
}

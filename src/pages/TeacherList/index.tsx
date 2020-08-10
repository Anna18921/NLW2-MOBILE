import React, { useState, useEffect } from "react";
import {
  Container,
  ScrollView,
  Input,
  BoxForm,
  Label,
  BoxInput,
  InputBlock,
  FilterButton,
  TextButton,
  ButtonSubmitForm,
} from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";

export default function TeacherList() {
  const [isVisible, setIsVisible] = useState(false);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [data, setData] = useState([]);

  const [favorites, setFavorites] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritesList = JSON.parse(response);

        const teacherId = favoritesList.map((teacher: Teacher) => teacher.id);
        setFavorites(teacherId);
      }
    });
  }

  function toggleFiltersVisible() {
    setIsVisible(!isVisible);
  }

  async function handleSubmitForm() {
    loadFavorites();
    const result = await api.get("classes", {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });
    if (result.status) {
      setData(result.data);
    }
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <ButtonSubmitForm onPress={toggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </ButtonSubmitForm>
        }
      >
        {isVisible && (
          <BoxForm>
            <Label>Matéria</Label>
            <Input
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <BoxInput>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual horário?"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </BoxInput>
            <FilterButton onPress={handleSubmitForm}>
              <TextButton>Filtrar</TextButton>
            </FilterButton>
          </BoxForm>
        )}
      </PageHeader>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      >
        {!!data &&
          data.map((teacher: Teacher) => {
            return (
              <TeacherItem
                teacher={teacher}
                key={teacher.id}
                favorited={favorites.includes(teacher.id)}
              />
            );
          })}
      </ScrollView>
    </Container>
  );
}

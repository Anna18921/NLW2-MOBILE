import React, { useState } from "react";
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
import TeacherItem from "../../components/TeacherItem";
import { Feather } from "@expo/vector-icons";
export default function TeacherList() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleFiltersVisible() {
    setIsVisible(!isVisible);
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
            />
            <BoxInput>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual horário?"
                />
              </InputBlock>
            </BoxInput>
            <FilterButton onPress={() => {}}>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </Container>
  );
}

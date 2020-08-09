import React from "react";
import { Container } from "./styles";
import PageHeader from "../../components/PageHeader";
import { ScrollView } from "../TeacherList/styles";
import TeacherItem from "../../components/TeacherItem";

export default function Favorite() {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
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

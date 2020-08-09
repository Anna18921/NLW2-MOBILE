import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  margin-top: -30px;
`;

export const Input = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0px 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const BoxForm = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: "Archivo_400Regular";
`;

export const BoxInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;
export const ButtonSubmitForm = styled.TouchableOpacity`
  padding: 7px;
`;

export const FilterButton = styled.TouchableOpacity`
  background-color: #04d361;

  height: 36px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-family: "Archivo_700Bold";
  color: #fff;
  margin-left: 16px;
  font-size: 16px;
`;

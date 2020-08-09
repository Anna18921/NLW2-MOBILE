import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const Icon = styled.Image``;

export const Title = styled.Text`
  font-family: "Archivo_400Regular";
  font-size: 20px;
  color: #ffffff;
  line-height: 30px;
  margin-top: 80px;
`;
export const TotalConnections = styled.Text`
  font-family: "Archivo_400Regular";
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

export const TextButton = styled.Text`
  font-family: "Archivo_700Bold";
  color: #ffffff;
  font-size: 20px;
`;

export const TitleBold = styled.Text`
  font-family: "Archivo_700Bold";
`;

export const BoxButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  height: 100px;
  width: 48%;
  background-color: red;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 24px;
`;

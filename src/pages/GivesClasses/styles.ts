import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled.Image``;

export const Title = styled.Text`
  font-family: "Archivo_700Bold";
  font-size: 32px;
  color: #ffffff;
  line-height: 37px;
  max-width: 180px;
`;
export const Description = styled.Text`
  font-family: "Poppins_400Regular";
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
  margin-top: 24px;
`;

export const TextButton = styled.Text`
  font-family: "Archivo_700Bold";
  color: #ffffff;
  font-size: 16px;
`;

export const BoxButton = styled.View`
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  height: 58px;
  margin-top: 40px;
  background-color: #04d361;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const BoxProfile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Description = styled.View`
  margin-left: 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const Icon = styled.Image``;

export const Name = styled.Text`
  font-family: "Archivo_700Bold";
  font-size: 20px;
  color: #32264d;
`;

export const Subject = styled.Text`
  font-family: "Poppins_400Regular";
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  font-family: "Poppins_400Regular";
  color: #6a6180;
  line-height: 24px;
  font-size: 14px;
  margin: 0px 24px;
  text-align: justify;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: 24px;
  padding: 24px;
  background-color: #fafafc;
`;

export const Price = styled.Text`
  font-family: "Poppins_400Regular";
  color: #6a6180;
  font-size: 14px;
`;

export const Value = styled.Text`
  font-family: "Archivo_700Bold";
  color: #8257e5;
  font-size: 16px;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled.TouchableOpacity`
  background-color: #04d361;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  flex: 1;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-family: "Archivo_700Bold";
  color: #fff;
  margin-left: 16px;
  font-size: 16px;
`;

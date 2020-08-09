import React, { ReactNode } from "react";
import { Container, TopBar, Icon, Title, Box } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import goBack from "../../assets/images/icons/back.png";
import logo from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Icon source={goBack} resizeMode="contain" />
        </BorderlessButton>
        <Icon source={logo} resizeMode="contain" />
      </TopBar>
      <Box>
        <Title>{title}</Title>
        {headerRight}
      </Box>
      {children}
    </Container>
  );
};

export default PageHeader;

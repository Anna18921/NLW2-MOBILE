import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import GiveClasses from "../pages/GivesClasses";
import RoutesTabs from "./routesTabs";

const { Navigator, Screen } = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={RoutesTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainStack;

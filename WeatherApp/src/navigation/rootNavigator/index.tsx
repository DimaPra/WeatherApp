import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { MyDrawer } from "../drawerNavigator/index";

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
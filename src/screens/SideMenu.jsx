import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigator from "../../MainNavigator";

const Drawer = createDrawerNavigator();

const SideMenu = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default SideMenu;

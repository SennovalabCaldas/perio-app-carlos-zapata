import React from "react";
import { HomeScreen } from "./src/screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen2 } from "./src/screens/Screen2";
import { Screen3 } from "./src/screens/Screen3";
import { Screen4 } from "./src/screens/Screen4";
import { CustomHeader } from "./src/screens/CustomHeader";
import { Screen5 } from "./src/screens/Screen5";
import { Screen6 } from "./src/screens/Screen6";
import { Screen7 } from "./src/screens/Screen7";
import { ScreenPresente } from "./src/screens/ScreenPresente";
import { ScreenAusente } from "./src/screens/ScreenAusente";
import { ScreenImplante } from "./src/screens/ScreenImplante";
import { Screen8 } from "./src/screens/Screen8";
import { Screen9 } from "./src/screens/Screen9";
import { Screen10 } from "./src/screens/Screen10";
import { Screen11 } from "./src/screens/Screen11";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen4"
        component={Screen4}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen5"
        component={Screen5}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen6"
        component={Screen6}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen7"
        component={Screen7}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ScreenPresente"
        component={ScreenPresente}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ScreenAusente"
        component={ScreenAusente}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ScreenImplante"
        component={ScreenImplante}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen8"
        component={Screen8}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen9"
        component={Screen9}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen10"
        component={Screen10}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Screen11"
        component={Screen11}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <StackNavigator />;
};

export default MainNavigator;

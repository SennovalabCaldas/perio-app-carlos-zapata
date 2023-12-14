import React from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const CustomHeader = ({ navigation }) => {
  const handleDrawer = () => {
    navigation.openDrawer();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../../assets/images/Asset12.png")}
      style={{
        width: "100%",
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
        resizeMode: "stretch",
        padding: 0,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={() => handleBack()}>
        <Icon
          name="chevron-left"
          size={20}
          color="#fff"
          style={{
            top: 20,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          top: 20,
        }}
      >
        <Image source={require("../../assets/images/Asset11.png")} />
      </View>

      <TouchableOpacity onPress={() => handleDrawer()}>
        <Icon
          name="navicon"
          size={20}
          color="#fff"
          style={{ top: 20, paddingHorizontal: 20 }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

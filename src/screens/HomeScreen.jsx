import { Image, ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Screen2");
    }, 5000);
  }, []);

  const window = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/Asset3.png")}
        style={[styles.imageContainer, { width: window.width, height: window.height }]}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: 200,
    resizeMode: "contain",
  },
});

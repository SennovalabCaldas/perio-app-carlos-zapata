import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";

export const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/wallpaper4.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../../assets/images/Asset5.png")}
          style={{
            width: "100%",
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            resizeMode: "contain",
            top: 5,
          }}
        />
        <Text style={styles.title}>¡Bienvenido a PerioApp!</Text>
        <Text style={styles.description}>
          PerioApp es una aplicación móvil que tiene como objetivo apoyar a los
          profesionales de la odontología en el diagnóstico presuntivo de la
          enfermedad periodontal con base en la clasificación de 2017 (World
          Workshop on the Classification).
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen3")} // Nombre de la pantalla anterior
          >
            <ImageBackground
              source={require("../../assets/images/Asset12.png")}
              style={styles.buttonBackground}
            >
              <Text style={styles.buttonText}>Ingresa</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 50,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 20,
    textAlign: "justify",
  },
  buttonContainer: {
    width: 280,
    height: 50,
    marginTop: 40,
    overflow: "hidden", // Asegura que el borderRadius funcione correctamente
    borderRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",

  },
});

export default Screen2;

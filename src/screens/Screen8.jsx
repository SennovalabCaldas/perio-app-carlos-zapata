import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Screen8 = () => {
  const useNavigationBuilder = useNavigation();
  const pickFirstCuadrant = () => {
    console.log("Primer cuadrante");
    useNavigationBuilder.navigate("Screen6");
  };

  const pickSecondCuadrant = () => {
    console.log("Segundo cuadrante");
  };

  const pickThirdCuadrant = () => {
    console.log("Tercer cuadrante");
  };

  const pickFourthCuadrant = () => {
    console.log("Cuarto cuadrante");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>resumen</Text>
        <Text style={styles.titleLabel2}>CUADRANTE</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          width: 380,
          height: 380,
        }}
      >
        <Image
          source={require("../../assets/images/Asset7.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          borderColor: "#000000",
        }}
      >
        <View style={[styles.circle, { backgroundColor: "green" }]} />
        <Text style={styles.description}>Ausente</Text>

        <View style={[styles.circle, { backgroundColor: "yellow" }]} />
        <Text style={styles.description}>Presente sano</Text>

        <View style={[styles.circle, { backgroundColor: "red" }]} />
        <Text style={styles.description}>Presente afectado</Text>

        <View style={[styles.circle, { backgroundColor: "blue" }]} />
        <Text style={styles.description}>Implante</Text>

        <View style={[styles.circle, { backgroundColor: "gray" }]} />
        <Text style={styles.description}>No evaluado</Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "stretch",
          padding: 0,
          flexDirection: "column",
          borderRadius: 30,
          marginTop: 20,
          bottom: 0,
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleGuardarDatos()}
          >
            <ImageBackground
              source={require("../../assets/images/Asset12.png")}
              style={styles.buttonBackground}
            >
              <Text style={styles.buttonText}>
                Ver diagnóstico del cuadrante
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  titleLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    top: 0,
    textTransform: "uppercase",
  },
  buttonContainer: {
    width: 280,
    height: 45,
    marginTop: 15,
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "#ffffff", // Cambiado a blanco
    borderWidth: 2, // Añadido para especificar el ancho del borde
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
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  description: {
    fontSize: 11,
    marginHorizontal: 0,
    marginTop: 10,
    textAlign: "justify",
    paddingRight: 5,
  },
  descriptionLateralLeft: {
    fontSize: 12,
    marginHorizontal: 0,
    marginTop: 10,
    textAlign: "justify",
    position: "absolute",
    left: 0,
    transform: [{ rotate: "-90deg" }], // Gira el texto 90 grados en sentido antihorario
  },
  descriptionLateralRight: {
    fontSize: 12,
    marginHorizontal: 0,
    marginTop: 10,
    textAlign: "justify",
    position: "absolute",
    right: 0,
    transform: [{ rotate: "90deg" }], // Gira el texto 90 grados en sentido horario
  },
  titleLabel2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    top: 0,
    textTransform: "uppercase",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10,
    
  },
});

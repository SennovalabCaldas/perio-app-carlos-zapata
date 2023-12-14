import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Screen6 = () => {
  const useNavigationBuilder = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const handleCuadranteSano = () => {
    console.log("Cuadrante sano");
  };

  const handleEvaluarCuadrante = () => {
    console.log("Evaluar cuadrante");
    useNavigationBuilder.navigate("Screen7");
  };

  const handleDientePress = () => {
    setIsButtonPressed(!isButtonPressed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>Periodontograma</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          paddingHorizontal: 40,
          width: "100%",
        }}
      >
        <Text style={styles.description}>Superior</Text>
        <Image
          source={require("../../assets/images/Asset7.png")}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "contain",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text style={styles.description}>Inferior</Text>
        <Text style={styles.descriptionLateralLeft}>Izquierdo</Text>
        <Text style={styles.descriptionLateralRight}>Derecho</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <View style={styles.buttonContainerDienteGrande}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonDiente,
              isButtonPressed && styles.buttonDientePressed,
            ]}
            onPress={() => {
              handleEvaluarCuadrante();
              handleDientePress();
            }}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/18.png")}
              style={[
                styles.buttonBackgroundDiente,
                styles.buttonBackgroundDientePressed,
              ]}
            >
              <Text style={styles.buttonTextDiente}>18</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDienteGrande}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/17.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>17</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDienteGrande}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/16.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>16</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDiente}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/15.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>15</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDiente}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/14.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>14</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDiente}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/13.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>13</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDiente}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/12.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>12</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerDiente}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEvaluarCuadrante()}
          >
            <ImageBackground
              source={require("../../assets/images/cuadrante1/11.png")}
              style={styles.buttonBackgroundDiente}
            >
              <Text style={styles.buttonTextDiente}>11</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.sanoButton]} // Agrega un nuevo estilo para el botón "Cuadrante sano"
            onPress={() => handleCuadranteSano()}
          >
            <Text style={styles.buttonText}>Cuadrante sano</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <ImageBackground
            source={require("../../assets/images/Asset12.png")}
            style={styles.buttonBackground}
          >
            <TouchableOpacity
              style={[styles.button, styles.evaluarButton]}
              onPress={() => handleEvaluarCuadrante()}
            >
              <Text style={styles.buttonText}>Evaluar</Text>
            </TouchableOpacity>
          </ImageBackground>
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
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: "justify",
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
    marginTop: 0,
    textAlign: "justify",
    position: "absolute",
    right: 0,
    transform: [{ rotate: "90deg" }],
  },
  buttonContainerDiente: {
    width: 40,
    height: 110,
    marginTop: 15,
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "#ffffff", // Cambiado a blanco
    borderWidth: 2, // Añadido para especificar el ancho del borde
  },
  buttonBackgroundDiente: {
    width: "90%",
    height: "94%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonContainerDienteGrande: {
    width: 49,
    height: 110,
    marginTop: 15,
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "#ffffff", // Cambiado a blanco
    borderWidth: 2, // Añadido para especificar el ancho del borde
  },
  sanoButton: {
    backgroundColor: "#007E98",
    borderColor: "#00a680",
  },
  buttonTextDiente: {
    fontSize: 12,
    color: "#00a680",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    bottom: 0,
    top: 35,
  },
  buttonDiente: {
    backgroundColor: "#ffffff",
    borderColor: "#00a680",
  },

  buttonBackgroundDientePressed: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Screen7 = () => {
  const navigation = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [selectedDiente, setSelectedDiente] = useState(null);
  const [cuadranteNumber, setCuadranteNumber] = useState(1);

  const handlePresente = () => {
    console.log("Presente");
    if (selectedDiente !== null) {
      navigation.navigate("ScreenPresente", { selectedDiente: selectedDiente });
    } else {
      Alert.alert(
        "Debes seleccionar un diente antes de continuar",
        "Selecciona un diente para continuar",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
      console.warn("Debes seleccionar un diente antes de continuar");
    }
  };

  const handleAusente = () => {
    console.log("Ausente");
    if (selectedDiente !== null) {
      navigation.navigate("ScreenAusente", { selectedDiente: selectedDiente });
    } else {
      Alert.alert(
        "Debes seleccionar un diente antes de continuar",
        "Selecciona un diente para continuar",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
      console.warn("Debes seleccionar un diente antes de continuar");
    }
  };

  const handleImplante = () => {
    console.log("Implante");
    if (selectedDiente !== null) {
      navigation.navigate("ScreenImplante", { selectedDiente: selectedDiente });
    } else {
      Alert.alert(
        "Debes seleccionar un diente antes de continuar",
        "Selecciona un diente para continuar",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
      console.warn("Debes seleccionar un diente antes de continuar");
    }
  };

  const handleDiagnostico = () => {
    Alert.alert(
      "Generar diágnostico del cuadrante",
      "¿Estás seguro de generar el diagnóstico?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            navigation.navigate("ScreenDiagnostico");
          },
        },
      ]
    );
    console.warn("Haz seleccionado generar diagnóstico");
  };

  const handleDientePress = (dienteNumber) => {
    setSelectedDiente(dienteNumber);
    setIsButtonPressed(!isButtonPressed);
    console.log("Diente seleccionado: ", dienteNumber);
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
          paddingHorizontal: 30,
          top: 10,
        }}
      >
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
                handleDientePress(18);
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(17);
              }}
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(16);
              }}
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(15);
              }}
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(14);
              }}
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(13);
              }}
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(12);
              }}
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
              style={[
                styles.button,
                styles.buttonDiente,
                isButtonPressed && styles.buttonDientePressed,
              ]}
              onPress={() => {
                handleDientePress(11);
              }}
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
      </View>
      <View
        style={{
          width: "100%",
          height: 270,
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
        <ImageBackground
          source={require("../../assets/images/Asset12.png")}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            resizeMode: "stretch",
            padding: 0,
            flexDirection: "column",
            borderRadius: 30,
            bottom: 0,
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePresente()}
            >
              <Text style={styles.buttonText}>Presente</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAusente()}
            >
              <Text style={styles.buttonText}>Ausente</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleImplante()}
            >
              <Text style={styles.buttonText}>Implante</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDiagnostico()}
            >
              <Text style={styles.buttonText}>Finalizar evaluación</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
    paddingTop: 30,
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
    marginTop: 10,
    textAlign: "justify",
    position: "absolute",
    right: 0,
    transform: [{ rotate: "90deg" }], // Gira el texto 90 grados en sentido horario
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

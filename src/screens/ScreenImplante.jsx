import Slider from "@react-native-community/slider";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const ScreenImplante = ({ route }) => {
  const { selectedDiente } = route.params;
  console.log("Diente seleccionado en ScreenPresente: ", selectedDiente);
  const navigation = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [posicion, setPosicion] = useState("Sí");
  const [tejido, setTejido] = useState("Sí");
  const [sangradoSupuracion, setSangradoSupuracion] = useState("Sí");
  const [perdidaOsea, setPerdidaOsea] = useState(0);
  const [profundidadSondaje, setProfundidadSondaje] = useState(0);
  const [cuadranteNumber, setCuadranteNumber] = useState(0);
  const [cuadranteName, setCuadranteName] = useState("");
  const [diente, setDiente] = useState(0);

  useEffect(() => {
    if (selectedDiente === 18) {
      setCuadranteNumber(1);
      setDiente(18);
    }
    if (selectedDiente === 17) {
      setCuadranteNumber(1);
      setDiente(17);
    }
    if (selectedDiente === 16) {
      setCuadranteNumber(1);
      setDiente(16);
    }
    if (selectedDiente === 15) {
      setCuadranteNumber(1);
      setDiente(15);
    }
    if (selectedDiente === 14) {
      setCuadranteNumber(1);
      setDiente(14);
    }
    if (selectedDiente === 13) {
      setCuadranteNumber(1);
      setDiente(13);
    }
    if (selectedDiente === 12) {
      setCuadranteNumber(1);
      setDiente(12);
    }
    if (selectedDiente === 11) {
      setCuadranteNumber(1);
      setDiente(11);
    }
    if (cuadranteNumber === 1) {
      setCuadranteName("Cuadrante superior derecho");
    } else {
      setCuadranteName("");
    }
  }, [selectedDiente, cuadranteNumber]);

  const getDienteImageSource = (diente) => {
    switch (diente) {
      case 18:
        return require("../../assets/images/cuadrante1/18.png");
      case 17:
        return require("../../assets/images/cuadrante1/17.png");
      case 16:
        return require("../../assets/images/cuadrante1/16.png");
      case 15:
        return require("../../assets/images/cuadrante1/15.png");
      case 14:
        return require("../../assets/images/cuadrante1/14.png");
      case 13:
        return require("../../assets/images/cuadrante1/13.png");
      case 12:
        return require("../../assets/images/cuadrante1/12.png");
      case 11:
        return require("../../assets/images/cuadrante1/11.png");
      default:
        return require("../../assets/images/AssetSuperiorDerecho.png"); // Provide a default image or handle accordingly
    }
  };

  const handleGuardarDatos = () => {
    console.log("Posicion: ", posicion);
    console.log("Tejido: ", tejido);
    console.log("SangradoSupuracion: ", sangradoSupuracion);
    console.log("PerdidaOsea: ", perdidaOsea);
    console.log("ProfundidadSondaje: ", profundidadSondaje);
    console.log("CuadranteNumber: ", cuadranteNumber);
    console.log("Diente: ", diente);
    console.log("CuadranteName: ", cuadranteName);
    Alert.alert(
      "Datos Almacenados",
      "Los datos han sido almacenados exitosamente.",
      [
        {
          text: "Aceptar",
          onPress: () => {
            navigation.navigate("Screen8");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>{cuadranteName}</Text>
        <Text style={styles.titleLabel2}>Presente diente {diente}</Text>
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 150,
          }}
        >
          <Image
            source={getDienteImageSource(selectedDiente)}
            style={styles.dienteImage}
          />
        </View>
      </View>
      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Posicion</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[styles.radioButton, posicion === "Sí" && styles.selected]}
            onPress={() => setPosicion("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[styles.radioButton, posicion === "No" && styles.selected]}
            onPress={() => setPosicion("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Tejido</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[styles.radioButton, tejido === "Sí" && styles.selected]}
            onPress={() => setTejido("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[styles.radioButton, tejido === "No" && styles.selected]}
            onPress={() => setTejido("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Sangrado Supuracion</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              sangradoSupuracion === "Sí" && styles.selected,
            ]}
            onPress={() => setSangradoSupuracion("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              sangradoSupuracion === "No" && styles.selected,
            ]}
            onPress={() => setSangradoSupuracion("No")}
          />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Pérdida ósea</Text>
        <Slider
          style={{
            width: 200,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            top: 0,
          }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={perdidaOsea}
          onValueChange={(value) => setPerdidaOsea(value)}
        />
        <Text style={{ textAlign: "center" }}>{perdidaOsea}</Text>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Profundidad al sondaje</Text>
        <Slider
          style={{
            width: 200,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            top: 0,
          }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={profundidadSondaje}
          onValueChange={(value) => setProfundidadSondaje(value)}
        />
        <Text style={{ textAlign: "center" }}>{profundidadSondaje}</Text>
      </View>
      <View style={styles.divider} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGuardarDatos()}
        >
          <ImageBackground
            source={require("../../assets/images/Asset12.png")}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Aceptar</Text>
          </ImageBackground>
        </TouchableOpacity>
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
    paddingHorizontal: 30,
    paddingVertical: 30,
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
    borderWidth: 2,
    marginBottom: 20,
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
  titleLabel2: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 18,
    color: "#000000",
    top: 0,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    textTransform: "uppercase",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#000000",
    marginBottom: 10,
  },
  characteristicsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
  },

  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#3498db",
  },
  radioButtonText: {
    color: "black",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  radioButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  dienteImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

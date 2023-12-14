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

export const Screen5 = () => {
  const useNavigationBuilder = useNavigation();
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [selectedCuadrante, setSelectedCuadrante] = useState("");

  const pickFirstCuadrant = () => {
    console.log("Primer cuadrante");
    setSelectedCuadrante("Cuadrante superior derecho");
    useNavigationBuilder.navigate("Screen6");
  };

  const pickSecondCuadrant = () => {
    console.log("Segundo cuadrante");
    setSelectedCuadrante("Cuadrante superior izquierdo");
    useNavigationBuilder.navigate("Screen9");
  };

  const pickThirdCuadrant = () => {
    console.log("Tercer cuadrante");
    setSelectedCuadrante("Cuadrante inferior izquierdo");
    useNavigationBuilder.navigate("Screen10");
  };

  const pickFourthCuadrant = () => {
    console.log("Cuarto cuadrante");
    setSelectedCuadrante("Cuadrante inferior derecho");
    useNavigationBuilder.navigate("Screen11");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>Periodontograma</Text>
       
      </View>

      <Text
        style={{
          color: "#000",
          fontSize: 14,
          top: 0,
          marginBottom: 10,
          left: 5,
        }}
      >
        {selectedCuadrante
          ? `Seleccionaste: ${selectedCuadrante}`
          : "Selecciona el cuadrante a evaluar"}
      </Text>
      <Text style={styles.description}>Superior</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 220,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 220,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 355,
              height: 220,
            }}
          >
            <TouchableOpacity
              style={[styles.imageContainer, hovered1 && styles.imageHovered]}
              onPress={pickFirstCuadrant}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              <Image
                source={require("../../assets/images/cuadrante1/cuadrante1.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageContainer, hovered2 && styles.imageHovered]}
              onPress={pickSecondCuadrant}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <Image
                source={require("../../assets/images/cuadrante1/cuadrante2.png")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 355,
              height: 220,
            }}
          >
            <TouchableOpacity
              style={[styles.imageContainer, hovered3 && styles.imageHovered]}
              onPress={pickFourthCuadrant}
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <Image
                source={require("../../assets/images/cuadrante1/cuadrante4.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageContainer, hovered4 && styles.imageHovered]}
              onPress={pickThirdCuadrant}
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <Image
                source={require("../../assets/images/cuadrante1/cuadrante3.png")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.descriptionInferior}>Inferior</Text>
      <Text style={styles.descriptionLateralLeft}>Derecho</Text>
      <Text style={styles.descriptionLateralRight}>Izquierdo</Text>
      {/* <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "stretch",
          padding: 0,
          flexDirection: "column",
          borderRadius: 30,
          marginTop: 25,
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
            <TouchableOpacity style={styles.button} onPress={pickFirstCuadrant}>
              <Text style={styles.buttonText}>Cuadrante superior derecho</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={pickSecondCuadrant}
            >
              <Text style={styles.buttonText}>
                Cuadrante superior izquierdo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={pickThirdCuadrant}>
              <Text style={styles.buttonText}>Cuadrante inferior derecho</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={pickFourthCuadrant}
            >
              <Text style={styles.buttonText}>
                Cuadrante inferior izquierdo
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    padding: 0,
    flexDirection: "column",
    borderRadius: 30,
    marginTop: 10,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#F9F9F9",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    padding: 20,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  titleContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  titleLabel: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  description: {
    color: "#000",
    fontSize: 14,
    top: 0,
    marginBottom: 120,
    left: 5,
  },
  descriptionInferior: {
    color: "#000",
    fontSize: 14,
    top: 120,
  },
  descriptionLateralLeft: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
    left: 0,
    paddingTop: 0,
    bottom: 390,
    transform: [{ rotate: "-90deg" }],
  },
  descriptionLateralRight: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
    right: 0,
    marginTop: 10,
    bottom: 390,
    transform: [{ rotate: "-90deg" }],
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    padding: 0,
    margin: 0,
    flexDirection: "column",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    padding: 0,
    margin: 0,
    flexDirection: "column",
    borderRadius: 30,
  },
  imageHovered: {
    borderColor: "#007AFF", // Color de borde al hacer hover
  },

  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    padding: 0,
    flexDirection: "column",
    borderRadius: 30,
    marginTop: 25,
  },
});

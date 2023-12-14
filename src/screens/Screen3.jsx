import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export const Screen3 = () => {
  const [nombres, setNombres] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("Masculino");
  const navigation = useNavigation();

  const handleRegistro = () => {
    console.log("Nombres:", nombres);
    console.log("Identificación:", identificacion);
    console.log("Edad:", edad);
    console.log("Género:", genero);
    navigation.navigate("Screen4");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          top: 80,
        }}
      >
        <Text style={styles.titleLabel}>Registro del paciente</Text>
        <Image
          source={require("../../assets/images/Asset10.png")}
          style={{
            height: 190,
            width: 190,
            paddingEnd: 30,
            justifyContent: "center",
            alignItems: "center",
            resizeMode: "contain",
            top: 5,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          top: 100,
        }}
      >
        <TextInput
          placeholder="Nombres y Apellidos"
          value={nombres}
          onChangeText={(text) => setNombres(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Identificación"
          value={identificacion}
          onChangeText={(text) => setIdentificacion(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Edad"
          value={edad}
          onChangeText={(text) => setEdad(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={genero}
            style={styles.picker}
            onValueChange={(itemValue) => setGenero(itemValue)}
          >
            <Picker.Item
              label="Género"
              value="Género"
              color="#999999"
              style={{
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
            />
            <Picker.Item
              label="Masculino"
              value="Masculino"
              style={{
                color: "#000000",
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
            />
            <Picker.Item
              label="Femenino"
              value="Femenino"
              style={{
                color: "#000000",
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
            />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRegistro()}
          >
            <ImageBackground
              source={require("../../assets/images/Asset12.png")}
              style={styles.buttonBackground}
            >
              <Text style={styles.buttonText}>Siguiente</Text>
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
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 80,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 10,
  },
  titleLabel: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  pickerContainer: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    overflow: "hidden", // Asegura que el borderRadius funcione correctamente
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#000000",
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    marginTop: 20,
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

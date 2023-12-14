import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const Screen4 = ({ navigation }) => {
  const [fumador, setFumador] = useState("No");
  const [diabetes, setDiabetes] = useState("No");
  const [desordenGenetico, setDesordenGenetico] = useState("No");
  const [inmunodeficiencia, setInmunodeficiencia] = useState("No");
  const [obesidad, setObesidad] = useState("No");
  const [osteoporosis, setOsteoporosis] = useState("No");
  const [artritis, setArtritis] = useState("No");
  const [enfermedadCardiovascular, setEnfermedadCardiovascular] =
    useState("No");
  const [medicamentos, setMedicamentos] = useState("");

  const handleGuardarDatos = () => {
    console.log("Fumador:", fumador);
    console.log("Diabetes:", diabetes);
    console.log("Desorden Genético:", desordenGenetico);
    console.log("Inmunodeficiencia:", inmunodeficiencia);
    console.log("Obesidad:", obesidad);
    console.log("Osteoporosis:", osteoporosis);
    console.log("Artritis:", artritis);
    console.log("Enfermedad Cardiovascular:", enfermedadCardiovascular);
    console.log("Medicamentos:", medicamentos);
    navigation.navigate("Screen5");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>Registro del paciente</Text>
        <Text style={styles.titleLabel2}>Factores locales / sistémicos</Text>
      </View>
      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Fumador:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[styles.radioButton, fumador === "Sí" && styles.selected]}
            onPress={() => setFumador("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[styles.radioButton, fumador === "No" && styles.selected]}
            onPress={() => setFumador("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Diabetes:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[styles.radioButton, diabetes === "Sí" && styles.selected]}
            onPress={() => setDiabetes("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[styles.radioButton, diabetes === "No" && styles.selected]}
            onPress={() => setDiabetes("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Desorden Genético:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              desordenGenetico === "Sí" && styles.selected,
            ]}
            onPress={() => setDesordenGenetico("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              desordenGenetico === "No" && styles.selected,
            ]}
            onPress={() => setDesordenGenetico("No")}
          />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Inmunodeficiencia:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              inmunodeficiencia === "Sí" && styles.selected,
            ]}
            onPress={() => setInmunodeficiencia("Sí")}
          />

          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              inmunodeficiencia === "No" && styles.selected,
            ]}
            onPress={() => setInmunodeficiencia("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Obesidad:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[styles.radioButton, obesidad === "Sí" && styles.selected]}
            onPress={() => setObesidad("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[styles.radioButton, obesidad === "No" && styles.selected]}
            onPress={() => setObesidad("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Osteoporosis:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              osteoporosis === "Sí" && styles.selected,
            ]}
            onPress={() => setOsteoporosis("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              osteoporosis === "No" && styles.selected,
            ]}
            onPress={() => setOsteoporosis("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Artritis:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[styles.radioButton, artritis === "Sí" && styles.selected]}
            onPress={() => setArtritis("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[styles.radioButton, artritis === "No" && styles.selected]}
            onPress={() => setArtritis("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.characteristicsContainer}>
        <Text style={styles.label}>Enfermedad Cardiovascular:</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Sí</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              enfermedadCardiovascular === "Sí" && styles.selected,
            ]}
            onPress={() => setEnfermedadCardiovascular("Sí")}
          />
          <Text style={styles.optionText}>No</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              enfermedadCardiovascular === "No" && styles.selected,
            ]}
            onPress={() => setEnfermedadCardiovascular("No")}
          />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.titleContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Medicamentos"
          value={medicamentos}
          onChangeText={(text) => setMedicamentos(text)}
          style={styles.textArea}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGuardarDatos()}
        >
          <ImageBackground
            source={require("../../assets/images/Asset12.png")}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 50,
    backgroundColor: "#ffffff",
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
  characteristicsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
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
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    overflow: "hidden",
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },
  titleLabel: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#000000",
    top: 0,
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
  textArea: {
    width: "100%",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
    textAlignVertical: "top",
  },
});

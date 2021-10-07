import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MachadoDeAssis from "./assets/machadoDeAssis.png";
import * as Speech from "expo-speech";
import Phrases from "./phrases.json";

export default function App() {
  const [phrase, setPhrase] = useState("");

  function newRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * Phrases.length);

    const newPhrase = Phrases[randomPhrase];

    setPhrase(newPhrase);
  }

  function handleSpeech() {
    Speech.speak(phrase.phrases);
  }


  return (
    <View style={styles.container}>
      <Image source={MachadoDeAssis} style={styles.img} />

      <TouchableOpacity onPress={newRandomPhrase} style={styles.button}>
        <Text style={styles.text}>Quero uma frase</Text>
      </TouchableOpacity>

      <View style={styles.containerText}>
        <Text style={styles.textPhrases}>{phrase.phrases}</Text>
      </View>

      <View style={styles.containerText} >
        <TouchableOpacity onPress={Speech.stop}>
          <Text>Parar o audio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSpeech} style={styles.buttonListen}>
          <Text style={styles.text}>Escutar a frase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  img: {
    width: 300,
    height: 300,
  },
  button: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD666",
    marginTop: 20,
  },
  buttonListen: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29B6D1",
    marginTop: 10,
  },
  containerText: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textPhrases: {
    color: "#8D734B",
    textAlign: "justify",
  },
});

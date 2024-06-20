import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "@/components/RoundedButton";

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          label="What do You want to Fcous On?"
          textColor="black"
          activeOutlineColor="white"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};
export default Focus;

const styles = StyleSheet.create({
  container: {},
  inputBox: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    justifyContent: "center",
  },
  inputContainer: {
    justifyContent: "flex-start",
    padding: 24,
    flexDirection: "row",
  },
});

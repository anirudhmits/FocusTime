import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Countdown } from "@/components/Countdown";
import { RoundedButton } from "@/components/RoundedButton";
import { Colors } from "@/constants/Colors";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";
const PATTERN = [1000, 100, 1000, 100, 1000, 100, 1000];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: 24 }}>
          <Text style={styles.title}>Focusing On: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: 32 }}>
        <ProgressBar
          progress={progress}
          color="steelblue"
          style={{ height: 8 }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}

        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton title="Clear" size={75} onPress={clearSubject} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonWrapper: {
    flex: 0.3,
    marginTop: 20,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 16,
  },
  title: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 24,
    paddingBottom: 10,
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: 64,
  },
  clearWrapper: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

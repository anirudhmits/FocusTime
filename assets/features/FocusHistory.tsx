import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={[styles.title, styles.container]}>
        We haven't focused on Anything
      </Text>
    );
  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have Focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { padding: 16 },

  title: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  item: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 8,
  },
});

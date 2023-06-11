import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorS } from "../../theme/Color";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Pressable style={styles.row}>
          <Ionicons name="bed" size={24} color="white" />
          <Text style={styles.iconText}>Stys</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Ionicons name="bed" size={24} color="white" />
          <Text style={styles.iconText}>Flights</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Ionicons name="bed" size={24} color="white" />
          <Text style={styles.iconText}>Car Rental</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Ionicons name="bed" size={24} color="white" />
          <Text style={styles.iconText}>Taxi</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorS.secondary,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    padding: 8,
    borderTopColor: colorS.white,
    borderWidth: 0.4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colorS.white,
    padding: 5,
    borderRadius: 18,
    marginRight: 6,
    backgroundColor: colorS.primary,
  },
  iconText: {
    color: colorS.white,
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "bold",
  },
});

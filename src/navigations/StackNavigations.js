import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNav from "./BottomTabsNav";

const StackNavigations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BotomTab" component={BottomTabsNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
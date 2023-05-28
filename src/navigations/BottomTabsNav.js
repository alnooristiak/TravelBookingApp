import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SaveScreen from "../screens/SaveScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookingScreen from "../screens/BookingScreen";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomTabsNav = () => {
    const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        {/* Home screen */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home" size={24} color="black" />
              ) : (
                <Ionicons name="home-outline" size={24} color="black" />
              ),
          }}
        />

        {/* Save screen */}
        <Tab.Screen
          name="Save"
          component={SaveScreen}
          options={{
            tabBarLabel: "Save",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-heart-outline" size={24} color="black" />
              ) : (
                <Ionicons name="ios-heart-sharp" size={24} color="black" />
              ),
          }}
        />

        {/* Booking screen */}
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ) : (
                <Ionicons name="notifications-sharp" size={24} color="black" />
              ),
          }}
        />

        {/* Profil screen */}
        <Tab.Screen
          name="Profil"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profil",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user" size={24} color="black" />
              ) : (
                <FontAwesome5 name="user-alt" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabsNav;

const styles = StyleSheet.create({});

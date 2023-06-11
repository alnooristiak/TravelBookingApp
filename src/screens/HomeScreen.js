import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { colorS } from '../../theme/Color';
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            title: "Booking.com",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colorS.white,
            },
            headerStyle: {
                backgroundColor: colorS.primary,
                height: 110
            },
            headerTitleAlign: 'center',
            headerRight: () => (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={colorS.light_Secondary}
                  style={{ marginRight: 10 }}
                />
              )
        })
    }, [])
  return (
    <View>
      <Header />

      <ScrollView style={styles.mainInputSec}>
        <View style={styles.inputSection}>
          {/* search section */}
          <Pressable style={styles.inputSec}>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.searchInputS}
              placeholder="Enter Your Searches Values"
            />
          </Pressable>

          {/* date picker */}
          <Pressable style={styles.inputSec}>
          <MaterialIcons style={styles.searchIcon} name="date-range" size={24} color="black" />
            <DatePicker
              style={{ width: 350, height: 45 }}
              customStyles={{
                placeholderText: { fontSize: 20 },
              }}
              centerAlign
              allowFontScaling={false}
              placeholder={"Apr 27, 2018 → Jul 10, 2018"}
              mode={"range"}
            />
          </Pressable>

          <Pressable></Pressable>

          <Pressable></Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    test: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    inputSection: {
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20
    },
    // input sesction styles 
    inputSec: {
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderRadius: 10
    },
    searchIcon: {
      borderRightWidth: 1,
      padding: 4
    },
    searchInputS: {
      padding: 4
    }
})
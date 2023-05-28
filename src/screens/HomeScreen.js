import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { colorS } from '../../theme/Color';

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
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    test: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './AllApps/First';
import AppNews from './AllApps/AppNews';
import Insta from './AllApps/First/components/Insta'

import Tuto from './AllApps/TutoFlatList'; 


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="AppNews" component={AppNews} />
        <Stack.Screen name="AppInsta" component={Insta} />
        <Stack.Screen name="AppTuto" component={Tuto} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
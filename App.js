import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FirstScreen from './AllApps/First';
import AppNews from './AllApps/AppNews';
import Insta from './AllApps/Insta'
import Tuto from './AllApps/TutoFlatList'; 
import DetailScreen from './AllApps/AppNews/detail'
import Ecommerce from './AllApps/Ecommerce';
import Private from './AllApps/Ecommerce/Private';



// Importatoion du store 
import store from './redux/store';
import {Provider} from 'react-redux';

import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();

export default function App() {

  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="First" component={FirstScreen} />
          
          {/* News App screen  */}
          <Stack.Screen name="AppNews" component={AppNews} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          
            {/* Ecommerce App screen  */}
          <Stack.Screen name="AppEcommerce" component={Ecommerce} />
          <Stack.Screen name="Private" component={Private} />

          <Stack.Screen name="AppInsta" component={Insta} />
          <Stack.Screen name="AppTuto" component={Tuto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    )
}

const styles = StyleSheet.create({})
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirebaseContext } from '../../firebaseContext';


import Home from './screen/Home';
import Setting from './screen/Setting';
import { useEffect } from 'react';


const Tab = createBottomTabNavigator();





const App = () => {
  
  const firebase = useContext(FirebaseContext);
  console.log("Firebase: ", firebase)
  
  const initCategories = async () => {
    const categories = await firebase.getCategories();
    
    if(!categories.empty){
      console.log("pas vide");
      categories.forEach(categoryData => {
        console.log("first", categoryData.data())
      })
    }
    console.log("categories: ", categories);
  }

  useEffect(() => {
    initCategories();

  },[]);
    
  
  return (
      <Tab.Navigator screenOptions={ {headerShown: false} }>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Mon compte" component={Setting} />
      </Tab.Navigator>
  );
};


export default App;
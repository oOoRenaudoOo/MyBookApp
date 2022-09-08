import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirebaseContext } from '../../firebaseContext';


import Home from './screen/Home';
import Setting from './screen/Setting';
import Details from './screen/Details';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addCategorie , addArticle} from '../../redux/action';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const Accueil = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil"  component={Home}/>
      <Stack.Screen name="Details"  component={Details}/>
    </Stack.Navigator>
  )
}



const App = () => {
  
  const dispatch = useDispatch();

  const firebase = useContext(FirebaseContext);
  console.log("Firebase: ", firebase)
  
  const initCategories = async () => {
    // lecture des categories dans la base de donnees Firebase
    const categories = await firebase.getCategories();
   
    if(!categories.empty){
    //  console.log("categories.empty", categories.empty);
      categories.forEach(categoryData => {

      //  console.log("id categoryData.id", categoryData.id);
        //console.log("categoryData.nom", categoryData.data().nom);
        
        // creation de la payload pour mettre a jour le state initial du reducer 
        const tempCategorie = {
          id: categoryData.id,
          nom: categoryData.data().nom};

        // version destructuree
        // const tempCategorie = { 
        //   id: categoryData.id,
        //   ...categoryData.data()};

        // mise a jour du reducer
        console.log("temp: ", tempCategorie);

        
        dispatch(addCategorie(tempCategorie));
        console.log("Nouvelle categorie: ", categories)
      });
    }
     else console.log("categories vide: ", categories);
  }


  // Init Articles
  const initArticles = async () => {
    // lecture des articles dans la base de donnees Firebase
    const articles = await firebase.getArticles();
    console.log("articles ", articles.empty);
    
    if(!articles.empty){
      console.log("articles pas vide", articles.empty);
      articles.forEach(articleData => {
       // console.log("id", articleData.id);
       // console.log("nom", articleData.data().nom);
        
        // creation de la payload pour mettre a jour le state initial du reducer 
        const tempArticle = { 
          id: articleData.id,
          nom: articleData.data().nom};

        // version destructuree
        // const tempCategorie = { 
        //   id: categoryData.id,
        //   ...categoryData.data()};

        // mise a jour du reducer
        console.log("temp: ", tempArticle);

        
        dispatch(addArticle(tempArticle));
      });
    }
    else console.log("articles: ", articles);
  }


  useEffect(() => {
    initCategories();
    initArticles();

  },[]);
    


  
  return (
      <Tab.Navigator screenOptions={ {headerShown: false} }>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Mon compte" component={Setting} />
      </Tab.Navigator>
  );
};


export default App;
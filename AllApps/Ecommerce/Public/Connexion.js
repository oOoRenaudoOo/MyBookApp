import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

import {useDispatch, useSelector} from 'react-redux';
import {editLogin, editNombre} from '../../../redux/action';

import { useNavigation } from '@react-navigation/native';



const Connexion = () => {


  const {nombre} = useSelector(state=>state);
  console.log("nombre", nombre);
  
  const {login} = useSelector(state=>state);

  //dispatcher
  const dispatch = useDispatch();



  const pressConnexion = () => {
    dispatch(editLogin(true));
    console.log("connexion", login);
  }

const nombrePlus = () => {
  dispatch(editNombre(nombre+1))
  console.log("nombrePlus");
}

const navigation = useNavigation();

const voirNombre = () => {
  dispatch(editLogin(!login));
  dispatch(editNombre(nombre));
    navigation.navigate("Private", nombre)
}

  return (

    <View>
      <Text>login</Text>
      <Text>Nombre : {nombre}</Text>
      <Button onPress={pressConnexion} title="connexion"/>
      <Button onPress={nombrePlus} title="Incrémentation"/>
      <Button onPress={voirNombre} title="VOIR"/>
    </View>
  )
}

export default Connexion
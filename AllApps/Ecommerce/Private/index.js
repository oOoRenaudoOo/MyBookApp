import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'


import {useDispatch, useSelector} from 'react-redux';
import {editLogin} from '../../../redux/action';




const Private = () => {
 
  const {login} = useSelector(state=>state);
  const {nombre} = useSelector(state=>state);


   //dispatcher
  const dispatch = useDispatch();

  const pressDeconnexion = () => {
    dispatch(editLogin(!login));
    console.log("déconnexion", login);
  };




  return (
    <View>
      <Text>private</Text>
      <Button title="Deconnexion" onPress={pressDeconnexion}/>
      <View><Text>{nombre}</Text></View>
    </View>
  )
}

export default Private;

const styles = StyleSheet.create({})
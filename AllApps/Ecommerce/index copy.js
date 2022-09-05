import { View, Text } from 'react-native'
import React from 'react'
import Connexion from './Public/Connexion';
import Private from './Private';
import { useSelector } from 'react-redux';




const Index = () => {
    //recupere la variable login qui est dans le state
    const {login} = useSelector(state=>state);

  

  return (
    <View>
      <Text>Ecommerce</Text>
      { !login ? <Connexion/> : <Private/> }
    </View>
  )
}

export default Index
import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'

import { useState } from 'react'

import firestore from '@react-native-firebase/firestore';







const Tuto = () => {

  const [getNombres, setNombres] = useState([0,1]);

  const readStagiaire = async () => {
    const user = await firestore().collection('stagiaires').doc('F86a11zo4r7OPypHFVf9').get();
    console.log('user', user)
  }


    
  const Ajouter = async () => {
        await readStagiaire();

        console.log(getNombres.length);

        const tempNombre = [...getNombres, getNombres.length+1];
        console.log(tempNombre);

        setNombres(tempNombre);

    }




    
  return (
    <FlatList
        ListHeaderComponent={
            <Button 
                title="Ajouter un nombre"
                onPress={Ajouter}
            />}
        data={getNombres}
        renderItem={({item}) =>(<Text>{item}</Text>) }
        keyExtractor = {item=>item}
        onEndReached={Ajouter}
        onEndReachedThreshold={0.2}

    >
    </FlatList>
  )
}

export default Tuto
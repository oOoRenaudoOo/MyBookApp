import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'

import { useState } from 'react'
import { set } from 'immer/dist/internal';



const Tuto = () => {

  const [getNombres, setNombres] = useState([0,1]);
    
   const Ajouter  = () => {

        const tempNombre = [...getNombres, getNombres.length];
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
import { View, Text } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'


const Insta = () => {
 
    const {login} = useSelector (state=> state)

    return (
        <View>
        { login ? <Text>Est connecté</Text> : <Text>N'est pas connecté</Text> }
        </View>
  )
}

export default Insta
import {Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {styles} from '../theme/styles'; 

import { useNavigation } from '@react-navigation/native';




const ItemNews = ({item}) => {
  
  const navigation = useNavigation();
 
  return (

    <TouchableOpacity 
      onPress={() => navigation.navigate("DetailScreen", {item})}
      style={styles.content}>
        
        <View style={styles.viewImg}>
          <Image style={styles.image} source={{ uri: item.image}}/>
        </View>  
        
        <View style={styles.viewText}>
          <Text style={styles.titre}>{item.title}</Text>
        </View>    
      
    </TouchableOpacity>
  )
}

export default ItemNews

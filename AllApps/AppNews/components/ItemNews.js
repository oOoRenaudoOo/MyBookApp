import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import {styles} from '../theme/styles'; 



const ItemNews = ({item}) => {
  return (
    <View style={styles.content}>
      
      <View style={styles.viewImg}>
        <Image style={styles.image} source={{ uri: item.image}}/>
      </View>  
      
      <View style={styles.viewText}>
        <Text style={styles.titre}>{item.title}</Text>
      </View>    
    
    </View>
  )
}

export default ItemNews


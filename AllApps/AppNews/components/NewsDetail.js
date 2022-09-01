import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




const NewsDetail = ({route}) => {

    const { item } = route.params;

  return (
    <View>
      <Text>Detail de l'actualite {item.titre}</Text>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={{ uri: item.image}}/>
      </View>
    </View>
  )
}

export default NewsDetail

const styles = StyleSheet.create({

    viewImage: {
        height: 200,
        width: "100%"
    }
})
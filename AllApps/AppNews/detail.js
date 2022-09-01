import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'





const DetailScreen = ({route}) => {
    
    const {item} = route.params 
    console.log(item)
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.titre}>{item.title}</Text>
        <View style={styles.viewImage}>
          <Image style={styles.image} source={{ uri: item.image}}/>
        </View>
      </View>

      <View Style={styles.contenu}>
        <View style={styles.viewDate}>
          <Text style={styles.date}>Publié le : {item.publishedAt}</Text>
        </View>
        <Text style={styles.description}>
          {item.description}
        </Text>

      </View>

    </View>
  )
}

export default DetailScreen



const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "blue"
    },
    header: {
 
      backgroundColor: "green"
    },
    contenu : {

      backgroundColor: "yellow"
    },
    titre: {
      backgroundColor: "black",
      fontSize: 15,
      fontWeight: 'bold',
      color: "white"
    },
    viewImage: {
   alignItems: 'center'
    },
    image : {
      height: 100,
      width: 300
    },
    viewDate: {



    },
    date: {
      fontSize: 10,
      fontWeight: 'bold-italic',
    }



  }
);
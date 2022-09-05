import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


const data = [
    {id: 1, nom: "cat 1"},
    {id: 2, nom: "cat 2"},
    {id: 3, nom: "cat 3"},
    {id: 4, nom: "cat 4"},
];

const RenderCategorie = ({categorie}) => {
    return (
        <TouchableOpacity style={styles.touchCategorie}>
            <Text>{categorie.nom}</Text>
        </TouchableOpacity>
    )
}



const Categories = () => {
  return (
    <View style={styles.content}>
        <Text style={styles.title}>Categories</Text>
        <FlatList
            data={data}
            renderItem={({item}) => <RenderCategorie categorie={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    content: {
        height: 100,
        width: "100%"
    },
    title: {
        fontSize: 25,
        fontWeight: '600'
    },
    itemR: {

    },
    touchCategorie: {
        backgroundColor: "yellow",
        margin: 10,
        padding: 10,
        width: 160,
        borderRadius: 20,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        elevation: 10
    },
    textCategorie: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500"
    } 
})
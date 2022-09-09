import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'


import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { trackForMutations } from '@reduxjs/toolkit/dist/immutableStateInvariantMiddleware';


// const data = [
//     {id: 1, nom: "cat 1"},
//     {id: 2, nom: "cat 2"},
//     {id: 3, nom: "cat 3"},
//     {id: 4, nom: "cat 4"},
// ];

const RenderArticle = ({article}) => {
    const navigation = useNavigation();

    const onPressArticle =() => {
        navigation.navigate("Details", {id: article.id});
    }
    return (
        <TouchableOpacity style={styles.touchArticle} onPress={onPressArticle}>
            <Text style={styles.titre_article}>{article.nom.length >= 15 ? article.nom.substring(0,10) + '...' : article.nom}</Text>
            <Image source={{uri: article.image}} style={styles.image}/>
            <Text style={styles.prix}>{article.prix} €</Text>
        </TouchableOpacity>
    )
};


// const initArticles = async () => {
//     const articles = await firebase.getArticles();
    
//     if(!articles.empty){
//       console.log("pas vide");
//       articles.forEach(articleData => {
//         console.log("lecture: ", articleData.data())
//       })
//     }
//     console.log("article: ", articles);
//   }



const Articles = () => {
    // Declaration du reducer dataArticle

    const {dataArticle} = useSelector (state=>state)
    console.log("reducer dataArticle:", dataArticle);


  return (
    <View>
        <Text style={styles.title}>Articles</Text>
        <View style={styles.container}>
            <FlatList
                data={dataArticle}
                // data={data}
                renderItem={({item}) => <RenderArticle article={item} />}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>
  )
}

export default Articles





const styles = StyleSheet.create({
    container: {
        height:300,
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    touchArticle: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        marginRight: 5,
        marginBottom: 5,
        padding: 10,
        width: 142,
        borderRadius: 15,
        height: 190,
        borderWidth: 1,
        borderColor: 'black',
    },
    titre_article: {
        fontSize: 14,
        color: "yellow",
        fontWeight: "700",
        marginBottom: 5
    },
    image: {
        width: 125,
        height: 120
    },
    prix: {
        color: "white",
        fontsize: 18
    } 
})
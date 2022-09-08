import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


// const data = [
//     {id: 1, nom: "cat 1"},
//     {id: 2, nom: "cat 2"},
//     {id: 3, nom: "cat 3"},
//     {id: 4, nom: "cat 4"},
// ];

const RenderArticle = ({article}) => {
    const navigation = useNavigation();

    const onPressArticle =() => {
        navigation.navigate("Details", {id:article.id});
    }
    return (
        <TouchableOpacity style={styles.touchArticle} onPress={onPressArticle}>
            <Text>{article.nom}</Text>
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
    <View style={styles.content}>
        <Text style={styles.title}>Articles</Text>
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
  )
}



export default Articles

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: "100%"
    },
    title: {
        fontSize: 25,
        fontWeight: '600'
    },
    itemR: {

    },
    touchArticle: {
        backgroundColor: "yellow",
        margin: 10,
        padding: 10,
        width: 135,
        borderRadius: 15,
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
    },
    textArticle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500"
    } 
})
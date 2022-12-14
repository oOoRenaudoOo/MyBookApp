import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


// import { FirebaseContext } from '../../firebaseContext';
import { useSelector } from 'react-redux';


// const data = [
//     {id: 1, nom: "cat 1"},
//     {id: 2, nom: "cat 2"},
//     {id: 3, nom: "cat 3"},
//     {id: 4, nom: "cat 4"},
// ];

const RenderCategorie = ({categorie}) => {
    return (
        <TouchableOpacity style={styles.touchCategorie}>
            <Text style={styles.textCategorie}>{categorie.nom}</Text>
        </TouchableOpacity>
    )
};


// const initCategories = async () => {
//     const categories = await firebase.getCategories();
    
//     if(!categories.empty){
//       console.log("pas vide");
//       categories.forEach(categoryData => {
//         console.log("lecture: ", categoryData.data())
//       })
//     }
//     console.log("categories: ", categories);
//   }




const Categories = () => {
    // Declaration du reducer dataCategorie

    const {dataCategorie} = useSelector (state=>state)
    console.log("reducer datacategorie:", dataCategorie);


  return (
    <View style={styles.content}>
        <Text style={styles.title}>Categories</Text>
        <FlatList
            data={dataCategorie}
            // data={data}
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
        fontSize: 20,
        fontWeight: '700'
    },
    touchCategorie: {
        backgroundColor: "yellow",
        margin: 10,
        marginTop: 5,
        padding: 5,
        // width: 120,
        borderRadius: 20,
        height: 35,
        borderWidth: 1,
        borderColor: 'black',
        elevation: 10,
        justifyContent: 'center'
        // alignItems: 'center'
    },
    textCategorie: {
        fontSize: 14,
        // color: "#fff",
        fontWeight: "500",
        marginHorizontal: 10
    } 
})
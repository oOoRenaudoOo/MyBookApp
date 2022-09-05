import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

import firestore from '@react-native-firebase/firestore';



const Item = ({ item }) => (
  <View style={styles.item_view}>
    <View style={styles.stagiaire_view}>
        <Text style={styles.nom}>{item.nom}</Text>
        <Text style={styles.prenom}>{item.prenom}</Text>
    </View>
    <View style={styles.image_container}>
    <Image style={styles.image} source={{uri: item.image}} />
    </View>
  </View>
);




const TutoFireList = () => {

    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    
    const [data, setData] = useState([]);

    //Chargement de la page
    useEffect(() => {
        firestore().collection('stagiaires').onSnapshot(snapShot=>{
            // console.log('snapshot : ',snapShot);

            let dataTemp = [];

            snapShot.forEach(document=>{
              // console.log("doc", document)
                dataTemp.push({ id: document.id, ...document.data() });
                setData(dataTemp);
                // console.log("document : ",dataTemp);
            })
        });
    },[]);




    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_view: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nom: {
    backgroundColor:'#00000010',
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius:10,
    paddingHorizontal:10
  },
  prenom: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius:50
  },
  image_container: {
    width:70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 15
  }

});

export default TutoFireList;
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { FirebaseContext } from '../../../firebaseContext';
import ArticleDetail from '../components/ArticleDetail';



const NoArticle = () => {
    return (<Text>Pas d'article</Text>)
}


const Details = ({route}) => {
    // recuperation de l'id
    const {id} = route.params;
    const [article, setArticle] = useState(null);
    const [load, setLoad] = useState(false);
    const firebase = useContext (FirebaseContext);

    const getArticle = async () => {
        setLoad(true);
        const rqArticle = await firebase.getArticleById(id);

        setTimeout(()=> {
            setArticle({id: id, ...rqArticle.data()});
            setLoad(false);
            console.log("rqArticle : ", rqArticle.data());
        }, 500)
    }


    useEffect(() =>{
        getArticle();
    },[])

    console.log("id", id);


    return (
        <View style={styles.content}>
            {
                (load == true) ? 
                    <ActivityIndicator />
                : (article == null) ?  
                    <NoArticle />
                    : <ArticleDetail article={article} />
            }
        </View>
    )
};


export default Details;


const styles = StyleSheet.create({
    content: {
        flex:1,
        BackgroundColor: 'gray',
    },
    title: {
        fontSize: 25,
        fontWeight: '600'
    },
})
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addPanier } from '../../../redux/action';


const ArticleDetail = ({article}) => {

    const dispatch = useDispatch();

    const ajouter = () => {
        dispatch(addPanier(article))
        console.log("ajouter")
    }


    return (
        <View>
            <Text>{article.nom}</Text>
            <Button
                title="Ajouter au panier"
                onPress={ajouter}
            />
            <Image source={{uri: article.image}} style={styles.image} />
        </View>
    )
};



export default ArticleDetail

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    }

})
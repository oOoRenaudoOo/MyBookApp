import { StyleSheet, Text, FlatList, Button, ActivityIndicator} from 'react-native'
import React, { useEffect } from 'react'
import ItemNews from './components/ItemNews'


import { useState } from 'react';
import { apiNews } from './function/api';
import RenderEmptyComponent from './components/RenderEmptyComponent';



// 1) Your API key is: 1bffdd1111f1497c8fce292a81d8e54e
// 2) 2c135b19e949b8f79d28e865dcbc039b (Gnews.io)


const NewScreen = () => {
    // Les datas
    const [getNews, setNews] = useState([]);
    const [waiting, setWaiting] = useState(true);

    // gestion de la navigation
    const [getPage, setPage] = useState(1);

    
    // chargement loadmore, gestion de la pagination
    const nextPage = async () => {
      setPage(getPage+1);

      const articles = await apiNews(getPage);
      setNews(articles);
      console.log("page: ", getPage);
    }

    

    // chargement de mon Api  
    const loadNews = async () => {
      
      const articles = await apiNews(getPage);
        setWaiting(true);
        setTimeout(() => {
        setNews([...getNews, ...articles]);
        setWaiting(false)
      }, 5000);
        

    }


    // se lance au chargement de la page et a chaque modification de[] 
    useEffect(()=>{
      setWaiting(true)
      loadNews();
    }, []);



  return (

      <FlatList
        ListEmptyComponent={<RenderEmptyComponent waiting={waiting} />}
        ListHeaderComponent={<Button 
        title ="Next page"
        onPress={nextPage}
        />}
        data={getNews}
        renderItem = {({item}) => <ItemNews item={item}/>}
        keyExtractor = {(item, index) => "key"+index}
        ListFooterComponent={(waiting && getNews.length > 0) && <ActivityIndicator />}
      />

  )
}

export default NewScreen





const styles = StyleSheet.create({});
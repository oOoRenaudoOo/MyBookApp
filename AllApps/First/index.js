import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { dataApp } from '../../datas/first';
import RenderItem from './components/RenderItem';



const Index = () => {
  return (
    <View>
      <FlatList
        data={dataApp}
        renderItem = {({item}) => <RenderItem item={item} />}
        keyExtractor = {item => item.id}
      />
    </View>
  )
}

export default Index


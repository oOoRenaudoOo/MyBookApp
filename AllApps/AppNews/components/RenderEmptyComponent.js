import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'





const RenderEmptyComponent = ({waiting}) => {
  return (
    <View style={styles.content}>
      { waiting ? 
            <ActivityIndicator/>
        : <Text>PAS DE NEWS !</Text>}
    </View>
  )
};

export default RenderEmptyComponent





const styles = StyleSheet.create({
    content: {
        flex: 1,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
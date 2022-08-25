import { StyleSheet, View } from 'react-native';
import { color, colors } from './colors';


export const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        backgroundColor : colors.primary,
        padding: 10,
        margin: 10,
        borderRadius:5
    },
    viewImg : {
        height : 100,
        width : 100
    },
    viewText : {
        width : 250,
        margin: 20
    },
    titre :{
        color : colors.textPrimary,
        fontSize: 15,
        fontWeight: '600'
    },
    image : {
        width: 100,
        height: 100,
        borderRadius: 50
    }
})
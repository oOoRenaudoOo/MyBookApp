import { StyleSheet } from 'react-native'
import { colors } from './color';


export const styles = StyleSheet.create({

    content: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius:5,
        margin: 10,
    },
    titre: {
        color : colors.textPrimary,
        fontSize: 24,
        fontWeight: '600'
    }

})
  
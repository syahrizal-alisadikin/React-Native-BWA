import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcNext } from '../../../assets'

const ItemListProfile = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text>{text}</Text>
                <IcNext/>
            </View>
        </TouchableOpacity>
    )
}

export default ItemListProfile

const styles = StyleSheet.create({
    container:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10},
    text:{fontSize:14,fontWeight:'500'},
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcNext } from '../../../assets'

const ItemListProfile = ({text}) => {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <IcNext/>
        </View>
    )
}

export default ItemListProfile

const styles = StyleSheet.create({
    container:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10},
    text:{fontSize:14,fontWeight:'500'},
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemValue = ({label,value,colorValue="#020202"}) => {
    return (
        <View style={styles.pages}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value(colorValue)}>{value}</Text>
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    pages:{flexDirection:'row',justifyContent:'space-between',marginBottom:4},
    label:{color:'#8D92A3',fontSize:14},
    value: (colorValue) => ({fontSize:14,color:colorValue})
})

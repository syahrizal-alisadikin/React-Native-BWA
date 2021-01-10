import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="green"/>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {position:'absolute',flex:1,backgroundColor:'rgba(234, 248, 73, 0.5)', width:'100%',height:'100%',justifyContent:'center',alignItems:'center'},
    text:{fontWeight:'700',marginTop:12}
})

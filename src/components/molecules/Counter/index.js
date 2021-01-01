import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcMin, IcPlus } from '../../../assets'

const Counter = () => {
    return (
        <View style={styles.pages}>
            <TouchableOpacity>
                <IcMin/>
            </TouchableOpacity>
            <Text style={styles.angka}>1</Text>
            <TouchableOpacity>
                <IcPlus/>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    pages:{flexDirection:'row',alignItems:'center'},
    angka:{marginHorizontal:10}
})

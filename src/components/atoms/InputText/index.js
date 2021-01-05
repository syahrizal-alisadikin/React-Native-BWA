import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const InputText = ({label,placeholder,...restProps}) => {
    return (
        <View>
            <Text style={styles.lable}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder} {...restProps} />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    lable:{fontSize:16,fontWeight:'500'},
    input:{borderWidth:1, borderColor:'green',borderRadius:8,padding:10,marginTop:5}

})

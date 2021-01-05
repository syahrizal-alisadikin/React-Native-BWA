import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const Select = ({label,value, selectChange}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                
                selectedValue={value}
                onValueChange={(itemValue) =>
                    selectChange(itemValue)
                }
                >
                <Picker.Item label="Bandung" value="Bandung" />
                <Picker.Item label="Jakarta" value="Jakarta" />
                <Picker.Item label="Bekasi" value="Bekasi" />
                <Picker.Item label="Sumedang" value="Sumedang" />
                </Picker>
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    lable:{fontSize:16,fontWeight:'500'},
    input:{borderWidth:1, borderColor:'green',borderRadius:8,paddingVertical:0,paddingHorizontal:0,marginTop:5}
})

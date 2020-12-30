import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const Select = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                
                // selectedValue={this.state.language}
                // onValueChange={(itemValue, itemIndex) =>
                //     this.setState({language: itemValue})
                // }
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
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

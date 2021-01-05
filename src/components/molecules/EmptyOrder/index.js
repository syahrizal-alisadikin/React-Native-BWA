import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlEmptyOrder } from '../../../assets'
import {Button,Gap} from '../../atoms'
import {useNavigation} from '@react-navigation/native'
const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <IlEmptyOrder/>
            <Gap height={30}/>
            <Text style={styles.title}>Ouch! Hungry</Text>
            <Gap height={6}/>

            <Text  style={styles.subTitle}>Seems like you have not</Text>
            <Text style={styles.subTitle}>ordered any food yet</Text>
            <Gap height={25}/>
            <View style={styles.buttonContainer}>
                <Button textColor={'#020202'} color={'#FFC700'} text={'Find Foods'} onPress={() => navigation.replace('MainApp')} />

            </View>
        </View>
    )
}

export default EmptyOrder

const styles = StyleSheet.create({
     page:{backgroundColor:'white',flex:1, justifyContent:'center',alignItems:'center'},
    title:{color:'#020202', fontWeight:'bold',fontSize:18,},
    subTitle:{color:'#8D92A3',fontSize:16},
    buttonContainer:{width:'100%',paddingHorizontal:80}
})

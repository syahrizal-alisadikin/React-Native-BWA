import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessOrder } from '../../assets'
import {Button,Gap} from '../../components'

const SuccessOrder = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccessOrder/>
            <Gap height={30}/>
            <Text style={styles.title}>You’ve Made Order</Text>
            <Gap height={6}/>

            <Text  style={styles.subTitle}>Just stay at home while we are</Text>
            <Text style={styles.subTitle}>preparing your best foods</Text>
            <Gap height={25}/>
            <View style={styles.buttonContainer}>
                <Button textColor={'black'} color={'#FFC700'} text={'Order Other Foods'} onPress={() => navigation.replace('MainApp')} />

            </View>
            <Gap height={16}/>

             <View style={styles.buttonContainer}>
                <Button textColor={'white'} color={'#8D92A3'} text={'View My Order'} onPress={() => navigation.replace('MainApp',{screen:'Order'})} />

            </View>
        </View>
    )
}

export default SuccessOrder

const styles = StyleSheet.create({
    page:{backgroundColor:'white',flex:1, justifyContent:'center',alignItems:'center'},
    title:{color:'#020202', fontWeight:'bold',fontSize:18,},
    subTitle:{color:'#8D92A3',fontSize:16},
    buttonContainer:{width:'100%',paddingHorizontal:80}
})

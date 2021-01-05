import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodDummy1 } from '../../assets'
import { Button, FoodListItem, Gap, Header, ItemValue } from '../../components'

const OrderDetail = () => {
    return (
        <ScrollView>
            <Header title={'Transaction'} subTitle={'You deserve better meal'} onBack={() => navigation.navigate('FoodDetail')} />
            <View style={styles.container}>
                 <Text style={styles.label}>Item Ordered</Text>
                <FoodListItem image={FoodDummy1} price={'500.000'} type={"order-summery"} menu={'Nasi Bakar'} items={'3'}/>
                <Text style={styles.label}>Detail Transaction</Text>
                <ItemValue label={'Cherry Healthy'} value={'IDR 18.390.000'}/>
                <ItemValue label={'Driver'} value={'IDR 50.000'}/>
                <ItemValue label={'Tax 10%'} value={'IDR 1.800.390'}/>
                <ItemValue label={'Total Price'} value={'IDR 390.803.000'} colorValue={'green'}/>
               
            </View>
            <View style={styles.container}>
                 <Text style={styles.label}>Deliver To :</Text>
                <ItemValue label={'Name'} value={'Angga Risky'}/>
                <ItemValue label={'Phone No'} value={'0822 0819 9688'}/>
                <ItemValue label={'Address'} value={'Setra Duta Palima'}/>
                <ItemValue label={'House No'} value={'A5 Hook'}/>
                <ItemValue label={'City'} value={'Bandung'}/>
            </View>

            <View style={styles.container}>
                 <Text style={styles.label}>Order Status :</Text>
                <ItemValue label={'#FM209391'} value={'Paid'} colorValue={'green'}/>
                
            </View>
            <View style={styles.button}>
                <Button color={'#D9435E'} textColor={'white'} text={'Cancel My Order'} onPress={() => navigation.replace('SuccessOrder')}/>
            </View>
            <Gap height={40}/>
       </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container:{paddingHorizontal:24,paddingVertical:15,backgroundColor:'white',marginTop:20,marginHorizontal:10,borderRadius:10},
    label:{color:'#020202',marginBottom:8,fontWeight:'bold'},
    button:{paddingHorizontal:24,paddingTop:20}
})

import React,{useEffect} from 'react';
import {Text , View} from 'react-native';
import {Logo} from '../../assets';
import { getData } from '../../utils';

 const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            getData('token').then((res) => {
                if(res){
                    navigation.reset({index:0 , routes: [{name:'MainApp'}]})
                }else{
                    navigation.replace('SignIn')
                }
            })
        },1000);
        
    }, [])

    return (
        <View style={{ backgroundColor:'#FFC700', flex:1,justifyContent:'center',alignItems:'center' }}>
            <Logo/>
            <View style={{ height:20 }}/>
            <Text style={{ fontSize:30, color:'green', fontWeight:'bold' }}>FoodMarket</Text>
        </View>
    )
}

export default SplashScreen

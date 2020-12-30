import React from 'react'
import { StyleSheet,ScrollView, Text, View,Image } from 'react-native';
import {ProfileDummy,FoodDummy1,FoodDummy2,FoodDummy3,FoodDummy4} from '../../assets';
import { FoodCard } from '../../components/molecules';

const Home = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
               <View>
                    <Text style={styles.title}>Skripsi 2021</Text>
                    <Text style={styles.subtitle}>Makan Lebih Murah</Text>
               </View>
               <Image source={ProfileDummy} style={styles.imageDumy}/>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.foodCardContainer}>
                    {/* <Gap width={24}/> */}
                    <FoodCard  image={FoodDummy1} menu={'Nasi'}/>
                    <FoodCard  image={FoodDummy2} menu={'Rujak'}/>
                    <FoodCard  image={FoodDummy3} menu={'Kopi'}/>
                    <FoodCard  image={FoodDummy4} menu={'Susu'}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    profileContainer:{backgroundColor:'yellow',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:24,
                        paddingBottom:24,
                        paddingTop:32},
    imageDumy:{height:50, width:50, borderRadius:8},
    title : {fontSize:22,fontWeight:'700',color:'#020202'},
    subtitle:{color:'grey',fontSize:14},
    foodCardContainer:{ flexDirection:'row',paddingVertical:16,marginLeft:16 }
})

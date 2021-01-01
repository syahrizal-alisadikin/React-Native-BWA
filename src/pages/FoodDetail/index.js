import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import { FoodDummy6, IcBackWhite } from '../../assets'
import { Button, Counter, Rating } from '../../components'

const FoodDetail = () => {
    return (
        <View style={styles.pages}>
            <ImageBackground source={FoodDummy6} style={styles.CoverImage}>
                <TouchableOpacity style={styles.back}>
                    <IcBackWhite/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>Sayuran Segar</Text>
                            <Rating/>
                        </View>
                        <Counter/>
                    </View>
                    <Text style={styles.desc}>Makan Paling Segar Di bekasi Meupakan makanan terenak yang pernah ada cobain sekarang nanti kamu menyesal</Text>
                    <Text style={styles.label}>Gradients:</Text>
                    <Text style={styles.desc}>Mangga, Jeruk, Melon</Text>
                </View>
                <View style={styles.Footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labelTotal}>Total Price:</Text>
                        <Text style={styles.priceTotal}>Rp500.000</Text>
                    </View>
                    <View style={styles.button}>
                        <Button text="Order Sekarang"/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    pages:{flex:1},
    CoverImage:{height:330,paddingLeft:20,paddingTop:26},
    back:{  height:30,width:30,justifyContent:'center',alignItems:'center' },
    content:{backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-30,paddingTop:20,paddingHorizontal:16,flex:1},
    mainContent:{flex:1},
    productContainer:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:14},
    title:{fontWeight:'700',fontSize:16},
    desc:{color:'grey',fontSize:14,marginBottom:16},
    label:{fontSize:16,fontWeight:'600'},
    Footer:{flexDirection:'row',paddingVertical:20,alignItems:'center'},
    priceContainer:{flex:1},
    button:{width:160},
    labelTotal:{color:'grey',fontSize:13},
    priceTotal:{fontSize:16,color:'black'}
})

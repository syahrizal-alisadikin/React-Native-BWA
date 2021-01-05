import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { Rating } from '..';

// Type 
// 1 Product
// 2 Order Summary
// 3 In Progress
// 4 Past Orders
const FoodListItem = ({image,menu,price,onPress,items,rating,type,date,status,color='#020202'}) => {

  

  const renderContent = () =>{
        switch (type) {
            case 'product':
              return(
                <>
                  <View style={styles.content}>
                      <Text style={styles.title}>{menu}</Text>
                      <Text style={styles.subtitle}>Rp{price}</Text>
                  </View>
                  <Rating rating={rating}/>
                </>
              )
            case 'order-summery':
              return(
                 <>
                  <View style={styles.content}>
                      <Text style={styles.title}>{menu}</Text>
                      <Text style={styles.subtitle}>Rp{price}</Text>
                  </View>
                  <Text style={{ fontSize:14, color:'grey' }}>{items}items</Text>
                </>
              )
            case 'in-progress':
             return(
                <>
                <View style={styles.content}>
                    <Text style={styles.title}>{menu}</Text>
                    <Text style={styles.subtitle}>{items}items. Rp{price}</Text>
                </View>
              </>
             )
            case 'past-orders':
              // Tampilan Past Orders 
              return(
                  <>
                <View style={styles.content}>
                    <Text style={styles.title}>{menu}</Text>
                    <Text style={styles.subtitle}>{items}items. Rp{price}</Text>
                </View>
                <View style={{ alignItems:'center' }}>
                  <Text style={styles.date}>{date}</Text>
                  <Text style={styles.status(color)}>{status}</Text>
                </View>
              </>
          
              )
            default:
               return(
                 <>
                  <View style={styles.content}>
                      <Text style={styles.title}>{menu}</Text>
                      <Text style={styles.subtitle}>Rp{price}</Text>
                  </View>
                  <Rating />
                </>
               )
  }
  }
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={{ paddingTop:8 }}>
            <View style={{ flexDirection:'row',paddingVertical:4,alignItems:'center' }}>
                <Image source={image} style={{ height:60, width:60, borderRadius:10, marginRight:10 }}/>
                {renderContent()}
            </View>
        </View>
      </TouchableOpacity>
    )
}

export default FoodListItem;

const styles = StyleSheet.create({
  content:{ flex:1 },
  title:{ fontSize:16,color:'black',fontWeight:'600' },
  subtitle:{ fontSize:14,color:'grey',fontWeight:'500' },
  date:{fontSize:10,color:'#8D92A3'},
  status: (color) => ({fontSize:12,color:color})

})

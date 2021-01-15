import React from 'react'
import { StyleSheet,ScrollView, View} from 'react-native';
import {FoodDummy1,FoodDummy2,FoodDummy3,FoodDummy4} from '../../assets';
import { FoodCard, HomeProfile, HomeTabSection } from '../../components/molecules';


const Home = () => {

      
    return (
     <ScrollView>
        <View style={styles.pages}>
            {/* HomeProfile */}
            <HomeProfile/>
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        {/* <Gap width={24}/> */}
                        <FoodCard  image={FoodDummy1} menu={'Nasi'} />
                        <FoodCard  image={FoodDummy2} menu={'Rujak'}/>
                        <FoodCard  image={FoodDummy3} menu={'Kopi'}/>
                        <FoodCard  image={FoodDummy4} menu={'Susu'}/>
                    </View>
                </ScrollView>
              </View>
            <View style={styles.tabCOntainer}>
              <HomeTabSection/>
            </View>
        </View>
     </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    pages:{flex:1,backgroundColor:'white'},
    foodCardContainer:{ flexDirection:'row',paddingVertical:16,marginLeft:16 },
    tabCOntainer:{flex:1}
})

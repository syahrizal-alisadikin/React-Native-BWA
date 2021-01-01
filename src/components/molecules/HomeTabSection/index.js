import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import { FoodListItem } from '../../molecules';
import {useNavigation} from '@react-navigation/native';

// Customer TabBar
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'yellow', width:'15%',height:3, marginLeft:'5%' }}
    style={{ backgroundColor: 'white',elevation:0,shadowOpacity:0 }}
    tabStyle={{ width:'auto'}}
    renderLabel={({ route, focused, color }) => (
    <Text style={{ color: focused ? 'black' : 'grey', fontWeight: focused ? '600' : '500' }}>
      {route.title}
    </Text>
  )}
    
  />
);

const NewFood = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FoodListItem  onPress={() => navigation.navigate('FoodDetail')}image={FoodDummy1} menu={'Ikan Bakar'} price={'500.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy2} menu={'Buah Segar'} price={'200.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy3} menu={'Kopi Mantan'} price={'100.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy4} menu={'Kopi Kenangan'} price={'150.000'}/>
    </View>
  );
}

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy4} menu={'Kopi Kenangan'} price={'150.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy2} menu={'Buah Segar'} price={'200.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy1} menu={'Ikan Bakar'} price={'500.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy3} menu={'Kopi Mantan'} price={'100.000'}/>
    </View>
  );
}

const Recomended = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy1} menu={'Ikan Bakar'} price={'500.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy3} menu={'Buah Segar'} price={'200.000'}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy2} menu={'Kopi Mantan'} price={'100.000'}/>
    </View>
  );
}

const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {

      const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: '1', title: 'New Food' },
            { key: '2', title: 'Popular' },
            { key: '3', title: 'Recomended' },
        ]);

        const renderScene = SceneMap({
            1: NewFood,
            2: Popular,
            3: Recomended,
        });

    return (
         <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ backgroundColor:'white' }}
            />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({})

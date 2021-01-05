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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingHorizontal:24  }}>
      <FoodListItem onPress={() => navigation.navigate('OrderDetail')} image={FoodDummy1} menu={'Ikan Bakar'} price={'500.000'} type='in-progress' items='3' />
      <FoodListItem onPress={() => navigation.navigate('OrderDetail')} image={FoodDummy2} menu={'Buah Segar'} price={'200.000'} type='in-progress' items='3' />
      <FoodListItem onPress={() => navigation.navigate('OrderDetail')} image={FoodDummy3} menu={'Kopi Mantan'} price={'100.000'} type='in-progress' items='3' />
      <FoodListItem onPress={() => navigation.navigate('OrderDetail')} image={FoodDummy4} menu={'Kopi Kenangan'} price={'150.000'} type='in-progress' items='3' />
    </View>
  );
}

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal:24  }}>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy4} menu={'Kopi Kenangan'} price={'150.000'} type='past-orders' date='Jun 12, 14:00' status='SUCCESS' color='green' items={3}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy2} menu={'Buah Segar'} price={'200.000'} type='past-orders' date='12 januari 2021' status='CANCEL' color='red' items={3}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy1} menu={'Ikan Bakar'} price={'500.000'} type='past-orders' date='12 januari 2021' status='PROCCESS' color='orange' items={3}/>
      <FoodListItem onPress={() => navigation.navigate('FoodDetail')} image={FoodDummy3} menu={'Kopi Mantan'} price={'100.000'} type='past-orders' date='12 januari 2021' status='PROCCESS' color='orange' items={3}/>
    </View>
  );
}



const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {

      const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: '1', title: 'In Progress' },
            { key: '2', title: 'Past Orders' },
        ]);

        const renderScene = SceneMap({
            1: InProgress,
            2: PastOrders,
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

export default OrderTabSection

const styles = StyleSheet.create({})

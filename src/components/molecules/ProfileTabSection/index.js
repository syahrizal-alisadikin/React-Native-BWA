import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { ItemListProfile } from '../../molecules';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Customer TabBar
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'yellow', width:'15%',height:3, marginLeft:'15%' }}
    style={{ backgroundColor: 'white',elevation:0,shadowOpacity:0 }}
    tabStyle={{ width:'auto'}}
    renderLabel={({ route, focused, color }) => (
    <Text style={{ color: focused ? 'black' : 'grey', fontWeight: focused ? '600' : '500',marginLeft:20 }}>
      {route.title}
    </Text>
  )}
    
  />
);

const Account = () => {

  const navigation = useNavigation();
  const signOut = () =>{
    AsyncStorage.multiRemove(['userProfile','token']).then(
      navigation.reset({index:0 , routes:[{name: 'SignIn'}]})
    )
  }
  return (
    <View style={{paddingHorizontal:24  }}>
      <ItemListProfile text='Edit Profile'/>
      <ItemListProfile text='Home Address'/>
      <ItemListProfile text='Security'/>
      <ItemListProfile text='Payments'/>
      <ItemListProfile text='Logout' onPress={signOut}/>
    </View>
  );
}

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal:24  }}>
      <ItemListProfile text='Rate App'/>
      <ItemListProfile text='Help Center'/>
      <ItemListProfile text='Privacy & Policy'/>
      <ItemListProfile text='Terms & Conditions'/>
    </View>
  );
}



const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {

      const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: '1', title: 'Account' },
            { key: '2', title: 'Food Market' },
        ]);

        const renderScene = SceneMap({
            1: Account,
            2: FoodMarket,
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

export default ProfileTabSection

const styles = StyleSheet.create({})

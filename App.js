import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from './screens/Chat'
import ContactScreen from './screens/Contact';
import HomeScreen from './screens/Home';

const Tab=createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex:1,marginTop:30,backgroundColor:'red'}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen}/>
          <Tab.Screen name='Chat' component={ChatScreen}/>
          <Tab.Screen name='Contact' component={ContactScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  
  );
}



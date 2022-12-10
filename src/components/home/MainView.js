import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import WriteReview from './WriteReview';
import ShowReview from './ShowReview';
import SettingsScreen from './SettingsScreen';



const Tab = createBottomTabNavigator();

export default function MainView() {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'WriteReview') {
            iconName = focused ? 'podium' : 'podium-outline';
          } else if (route.name === 'ShowReview'){
            iconName = focused ? 'beer' : 'beer-outline';
          } else if (route.name === 'Settings'){
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size}  color={color}/>;
        },
      })}
      // tabBarOptions={{
      screentabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen 
        name="WriteReview" 
        component={WriteReview} 
        options={{
          title: '강의 평가',
          headerTintColor: 'black',
          headerTitleStyle: {
              fontWeight: 'bold',
          }}}/>
        <Tab.Screen 
        name="ShowReview" 
        component={ShowReview} 
        options={{
          title: '평가 보기',
          headerTintColor: 'black',
          headerTitleStyle: {
              fontWeight: 'bold',
          }}}/>
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: '설정',
          headerTintColor: 'black',
          headerTitleStyle: {
              fontWeight: 'bold',
          }}}
        />
      </Tab.Navigator>
  );
}
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingView from './OnboardingView';
import MainView from '../home/MainView';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingView}
        options={{
            title: '',
            headerStyle: {
                backgroundColor: 'dodgerblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }}}
             />
        <Stack.Screen 
        name="Main" 
        component={MainView}
        options={{
          title: '',
          headerStyle: {
              backgroundColor: 'dodgerblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  


export default HomeNavigator;
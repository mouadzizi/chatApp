import React from 'react';

import Splash from './screens/Splash';
import SignIn  from './authentification/SignIn';
import SignUp  from './authentification/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


{/* Creat stack navigators*/}
const Stack = createStackNavigator();
const StackHome = createStackNavigator();


{/* Home stack navigator*/}
function home() {
  return(
    <NavigationContainer>
      <StackHome.Navigator>
      
      <Stack.Screen 
          name="Splash" 
          component={Splash}
          options={{ headerShown: false }} />

      </StackHome.Navigator>
    </NavigationContainer>
  )
}


{/* Main Function */}
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      
      <Stack.Screen 
          name="Splash" 
          component={Splash}
          options={{ headerShown: false }} />

        <Stack.Screen 
          name="SignIn" 
          component={SignIn}
          options={{ headerShown: false }} />

        <Stack.Screen 
          name="SignUp" 
          component={SignUp}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

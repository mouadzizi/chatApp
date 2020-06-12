import React, { useState, useEffect } from 'react';

import Splash from './screens/Splash';
import SignIn  from './authentification/SignIn';
import SignUp  from './authentification/SignUp';
import HomeScreen  from './screens/Home';
import { auth } from './data/firebaseConfig';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

{/* Creat stack navigators*/}
const Stack = createStackNavigator();
const StackHome = createStackNavigator();


{/* Home stack navigator*/}
function Home() {
  return(
      <StackHome.Navigator>
      
      <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{ headerShown: false }} />

      </StackHome.Navigator>
  )
}

function StackAuthentification(){
  return(
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
  )
}


{/* Main Function */}
export default function App() {

  const [user, setUser] = useState(false);

  useEffect(() => {
    
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setUser(true)
      }
      else setUser(false)
      
    })
  }, []);

  return (
    <NavigationContainer>
      
      
    {
      !user? <StackAuthentification/> : <Home/> 
    }

    </NavigationContainer>
  );
}

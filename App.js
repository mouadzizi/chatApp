import React, { useState, useEffect } from 'react';

import {TouchableOpacity} from 'react-native';
import Splash from './screens/Splash';
import SignIn  from './authentification/SignIn';
import SignUp  from './authentification/SignUp';
import HomeScreen  from './screens/Home';
import ChatScreen  from './screens/Chat';
import FriendsScreen  from './screens/Friends';

import { auth } from './data/firebaseConfig';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



{/* sign out function with firebase*/}
function signOutUser() {
        
        auth.signOut()
        .catch(err=>Alert.alert('Error',err.message))
    }

{/* Creat stack navigators*/}
const Stack = createStackNavigator();
const ContainerStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

{/* Home stack navigator*/}
function  Container() {
  return (
    <ContainerStack.Navigator initialRouteName="Home" >
      <ContainerStack.Screen name="Home" 
      component={Home}
      options={{
          title: 'App chat',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#4898D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity
            style={{marginLeft: 30}}
            onPress={()=>signOutUser()}>
            <FontAwesome5
            name='power-off'
            size={30}
            color='#fff'
            />
            </TouchableOpacity> ),
        }}
        
       />
    </ContainerStack.Navigator>
  );
}

{/* Home stack navigator*/}
function Home() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" >
      <Tab.Screen name="HomeScreen" 
      component={HomeScreen}
      options={{
          title: 'Page1',
        }} />
      <Tab.Screen name="FriendsScreen" 
      component={FriendsScreen}
      options={{
          title: 'Page2',
        }} />
    </Tab.Navigator>
  );
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
      !user? <StackAuthentification/> : <Container/> 
    }

    </NavigationContainer>
  );
}

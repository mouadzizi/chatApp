import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle'
import Swiper from 'react-native-swiper';

export default function Splash( {navigation} ) {

    const {width, height} = Dimensions.get('window');
    const height_image = height * 0.4 ;
    const width_image =  width * 0.8;
  
    return (
  
      <Swiper
        loop={false}
        style={{backgroundColor: 'white'}}
        dot={<View style={GlobalStyle.dot} />}
        activeDot={<View style={GlobalStyle.dotActive} />}>

        {/* Slider number 1 */}
      <View style={GlobalStyle.slideSplashScreen}>


          <Image
              source={require("../assets/slide1.png")}
              style={{height:height_image, width: width_image, alignSelf: 'center'}}
              resizeMode={"stretch"}/>

        
        <View style={GlobalStyle.footerSplashScreen}>

            <Text style={GlobalStyle.splashTitle}> SecretChat  </Text>
            <Text style={GlobalStyle.splashText}> SecretChat provide you secure chat with your partner </Text>
        
        </View>

      </View>

        {/* Slider number 2 */}
      <View style={GlobalStyle.slideSplashScreen}>


          <Image
              source={require("../assets/slide2.jpg")}
              style={{height:height_image, width: width_image, alignSelf: 'center'}}
              resizeMode={"stretch"}/>

        
        <View style={GlobalStyle.footerSplashScreen}>

            <Text style={GlobalStyle.splashTitle}> SecretChat  </Text>
            <Text style={GlobalStyle.splashText}> SecretChat provide you rooms to joing or to creat rooms for private chat </Text>
        
    
    <View 
      style={{flexDirection:'row', alignSelf: 'center'}}>

        <TouchableOpacity
        onPress={()=>{navigation.replace('SignUp')}}
          style={{
          borderColor: '#4898D3',
          borderRadius: 50,
          marginTop: 15,
          borderWidth: 1,
          width: 150,
          height: 40}}>
        <Text style={{color: '#4898D3', fontSize: 25, alignSelf: 'center'}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{navigation.replace('SignIn')}}
        style={{
          backgroundColor: '#4898D3',
          borderColor: '#4898D3',
          borderRadius: 50,
          marginTop: 15,
          marginLeft: 25,
          borderWidth: 1,
          width: 150,
          height: 40}}
          >
        <Text style={{color: 'white', fontSize: 25, alignSelf: 'center'}}>Sign In</Text>
        </TouchableOpacity>
        
        </View>

    </View>
    </View>
  
  
      </Swiper>
  
    );
  }
  
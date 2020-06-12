import { StyleSheet } from 'react-native';

export const GlobalStyle = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    dot:{
      backgroundColor: 'grey',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 3,
    },

    dotActive:{
      backgroundColor: '#4898D3',
      width: 20,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 3,
    },

    slideSplashScreen:{
      flex: 2,
      marginTop: 100,
    },

    splashTitle:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#4898D3',
      textAlign: 'center',
    },

    splashText:{
      color: 'grey',
      marginTop: 20,
      textAlign: 'center',
    },

    footerSplashScreen: {
      flex: 1,
      alignSelf: 'center',
      paddingHorizontal: 20,
    },

  });
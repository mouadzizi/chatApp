import React, {useState,useEffect} from 'react';
import {Platform, KeyboardAvoiding,View,Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat({route}){
    const [msg, setMsg] = useState("")
    const [usr, setUsr] = useState("")

    const {item} = route.params;


    useEffect(()=>{
        console.log(item.name);
        
    },[])
    return(
    <View style={{flex : 1}} >
        <GiftedChat  />
    </View>

)}
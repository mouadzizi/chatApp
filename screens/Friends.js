import React,{useState,useEffect} from 'react';
import {View, Text,FlatList} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import { FAB } from 'react-native-paper';
import {auth,db} from '../data/firebaseConfig'


export default function Friends({navigation}){
    const uid=auth.currentUser.uid;
    const[friends,setFriends]=useState([])
    useEffect(()=>{
        console.log("friends pages" );
        
        db.ref('user/'+uid+'/friends').on('value',(snapShot)=>{
            let fr=[];
            snapShot.forEach((child)=>{
                fr.push({
                    key:child.key,
                    name:child.val().username,
                    email:child.val().email
                });
            })
            setFriends(fr);
        })
        return () => db.ref('value').off();
    },[]);
    return(
    <View style={GlobalStyle.container}>
        <FlatList 
           data={friends}
           renderItem={({item})=><Text> {item.name} </Text>}
        />
        <FAB
        onPress={()=>navigation.push('search')}
        style={GlobalStyle.fab}
        size={40}
        color="#fff"
        icon="account-search"
        />

    </View>

)}
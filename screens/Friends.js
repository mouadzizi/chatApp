import React,{useState,useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import { FAB, Avatar, Divider, List } from 'react-native-paper';

import {auth,db} from '../data/firebaseConfig'

export default function Friends({navigation}){

    const uid=auth.currentUser.uid;
    const[friends,setFriends]=useState([])
    useEffect(()=>{        
       var lis= db.ref('user/'+uid+'/friends').on('value',(snapShot)=>{
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
        return () => db.ref('value').off('value',lis);
    },[]);

    function handleTransition(item){
        navigation.push('ChatScreen',{item})
        
    }
    return(
    <View style={GlobalStyle.container}>
        <FlatList 
        style={{width:'97%',marginTop:10}}
           data={friends}
           renderItem={({item})=>(
            <View>
           <TouchableOpacity
            style={{margin: 10, flexDirection:"row", alignContent: 'space-around'}}
            onPress={()=> handleTransition(item)}>

            <List.Item
            left={props=><Avatar.Text {...props} color={'white'} size={45} 
            label={item.name.charAt(0)}/>}
            />
            <Text style={{fontWeight: 'bold', marginTop: 15, marginLeft: 5}}>{item.name}</Text>
            </TouchableOpacity>
            <Divider />
            </View>
           )}
        />
                

        <FAB
        onPress={()=>navigation.push('Search')}
        style={GlobalStyle.fab}
        size={40}
        color="#fff"
        icon="account-search"
        />

    </View>

)}
import React,{useState,useEffect} from 'react';
import {View, Text,FlatList,TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import { FAB, List } from 'react-native-paper';
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
        navigation.push('chat',{item})
        
    }
    return(
    <View style={GlobalStyle.container}>
        <FlatList 
        style={{width:'97%',marginTop:10}}
           data={friends}
           renderItem={({item})=>(
           <TouchableOpacity
           onPress={()=>handleTransition(item)}
            style={{borderWidth:2,padding:10,marginVertical:2}}>
           <Text> {item.name} </Text>
           </TouchableOpacity>
           )}
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
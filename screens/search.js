import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,ActivityIndicator,FlatList } from 'react-native';
import {db,auth} from '../data/firebaseConfig'

export default function search() {
    const[allUsers,setAllUsers]=useState([]);
    const currentUser=auth.currentUser;
    const[loading,setLoading]=useState(false);


    useEffect(()=>{
        //start loading
        setLoading(true);
        //fetch data from database
        
        db.ref('user')
        .on('value',(dataSnapShot)=>{
            let users=[];
            dataSnapShot.forEach((child)=>{
                    if(currentUser.displayName!=child.val().info.username){
                    users.push({
                        key:child.key,
                        name:child.val().info.username,
                        email:child.val().info.email
                    })
                }
            })
            setAllUsers(users);
            setLoading(false);
        })
       
    },[])
    return (
        <View>
            <Text> Search Page </Text>
            <ActivityIndicator size="large" color="#4898D3" animating={loading} />
            <FlatList 
                data={allUsers}
                renderItem={({item})=><Text> {item.name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

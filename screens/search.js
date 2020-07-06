import React,{useEffect,useState} from 'react';
import {View,ActivityIndicator,FlatList, Alert } from 'react-native';
import { Searchbar, List, Divider} from 'react-native-paper';

import {db,auth} from '../data/firebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function search() {

    const [searchQuery, SetsearchQuery] = useState("");

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
        <Searchbar
                style={{paddingTop: 15}}
                placeholder="Find friend"
                onChangeText={text => SetsearchQuery(text)}
                value={searchQuery}/>
        
            <ActivityIndicator size="large" color="#4898D3" animating={loading} />

            <FlatList 
                data={allUsers}
                renderItem={({item})=>  
                <TouchableOpacity
                onPress={console.log("you touched something! touch your dick instead u pervert !!!")}>
                <List.Item
                title= {item.name}         
                description="your.email.com"
                right={props => <List.Icon {...props} icon="plus" />} />
                <Divider />
                </TouchableOpacity>}/>
        </View>
    )
}

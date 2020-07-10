import React,{useEffect,useState} from 'react';
import {View,ActivityIndicator,FlatList, Alert } from 'react-native';
import { Searchbar, List, Divider,Avatar } from 'react-native-paper';

import {db,auth} from '../data/firebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Friends({navigation}){

    const [searchQuery, SetsearchQuery] = useState("");

    const[allUsers,setAllUsers]=useState([]);
    const currentUser=auth.currentUser;
    const[loading,setLoading]=useState(false);
    const[friends,setFriends] = useState([]);
    const [isFriend,setIsFirends]=useState(false);

    useEffect(()=>{
        //start loading
        setLoading(true);
        //fetch data from database
        db.ref('user')
        .once('value',(dataSnapShot)=>{
            let users=[];
            dataSnapShot.forEach((child)=>{
                    if(currentUser.displayName!=child.val().info.username){
                    users.push({
                        key:child.key,
                        name:child.val().info.username,
                        email:child.val().info.email,
                        isFriend:isFriend,
                    })
                }
            })
            setAllUsers(users);
            setLoading(false); 
        })
        db.ref('user/'+currentUser.uid+'/friends').on('value',(snapShot)=>{
            let friends=[];
            snapShot.forEach((child)=>{
                friends.push(child.val().username) 
            })
            setFriends(friends) 
        })
     return () => db.ref('value').off();
    },[])

    function push(fr){
        db.ref('user/'+currentUser.uid+'/friends').push(fr)
        .catch(err=>Alert.alert(err))
    }

    function addFriend(key){
        db.ref('user/'+key).once("value",(snapShot)=>{
            if(friends.includes(snapShot.val().info.username)) {
                Alert.alert('Oups','You already friend with this person');
                setIsFirends(true)
                return;
            }
            else{
              push({
                  uid:key,
                  username:snapShot.val().info.username,
                  email:snapShot.val().info.email
              });
            }   
        })
    }

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
                onPress={()=>addFriend(item.key)}>
                <List.Item
                left={props=><Avatar.Text {...props} color={'white'} size={50} 
                label={item.name.charAt(0)}/>}
                title= {item.name}         
                description={item.email}
                right={props => <List.Icon {...props}  icon= "plus" />} />
                
                <Divider />
                </TouchableOpacity>}/>
        </View>
    )
}
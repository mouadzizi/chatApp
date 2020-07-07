/** 
<ContainerStack.Screen 
options={{
 title: 'Friends',
 headerTitleAlign: 'center',
 headerStyle: {
   backgroundColor: '#4898D3',
 },
 headerTintColor: '#fff',
 headerTitleStyle: {
   fontWeight: 'bold',
 }, 
}
}
name='search' component={Search} />

 <ContainerStack.Screen 
 name='chat' 
 component={ChatScreen}
 options={({route,navigation})=> ({
   
   headerTitleAlign: 'center',
   headerStyle: {
     backgroundColor: '#4898D3',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   },
   headerLeft:()=>(
     <View style={{flexDirection:'row'}}>
 <TouchableOpacity onPress={()=>navigation.goBack()}> 
         <Text> back </Text>
   </TouchableOpacity>
       <Text style={{color:'white'}}> {route.params.item.name} </Text>

    </View>
     
   )
 }) }
 /> **/
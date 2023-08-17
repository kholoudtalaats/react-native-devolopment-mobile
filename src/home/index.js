import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../screens/auth/styles";
import axiosClient from "../screens/api/axiosClient";

 const Home = () => {
   
    const [catFacts, setCatFacts] = useState(null);
    
    const getCatFacts = async() => {
        try{
          const response = await axiosClient.get('/users/1', {
           
          });
     
       setCatFacts(response)   
        } catch(e) {
            console.log("ErOOOR>", e)
        }
           
    }
   
    useEffect (() => {

    });
    const name = 'Micheal';
    return (
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:'500'}}>Hello {name}</Text>
            <TouchableOpacity  style={{backgroundColor:'pink', padding:5, shadowColor:'pink'}} onPress={getCatFacts}>
                <Text>Press Me</Text>
            </TouchableOpacity>
          
      
            <Text style={{fontSize:20, fontWeight:'500'}}>
                {catFacts?.name}
            </Text>
            <Text style={{fontSize:20, fontWeight:'500'}} >
                {catFacts?.location}
            </Text> 
            
            <Image style={{width: 150, height: 200}} 
                source={{uri: "https://github.com/1?profile=user1"}} />   

            <Image style={{width: 150, height: 150}}
            
                source={{uri: "https://avatars.githubusercontent.com/u/1825798?v=4"}} 
                
            />  
        </View> 
    );
 };
 export default Home;
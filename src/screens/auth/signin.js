import * as React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, Keyboard, TextInput, Button } from 'react-native';
import styles from './styles';
import userApi from '../api/userApi';

export const SignIn = () => {
    
    const [mobile, setMobile] = React.useState('')
    const [password, setPassword] =React.useState('')
    const onSubmit = (data) => {
        if (data) {
            //userApi(data);
            SignIn(data);
        }
    };
    return (
       
        <View style={styles.container}>
            <Text style={{fontSize:40, fontWeight:'bold', color: 'plum'}}>Welcome</Text>
        <View style={{width:200}}>
            <TextInput
            name="name"
            placeholder="mobile"
            style={styles.input}
            onChangeText={(mobile) => {
                setMobile(mobile)
            }}
              value={mobile}
              keyboardType='numeric'
              autoFocus 
              maxLength={11}
            />
            <TextInput
            name="name"
            placeholder="password"
            style={styles.input}
            onChangeText={(password) => {
                setPassword(password)
            }}
           
              value={password}
              secureTextEntry
            />
            <TouchableOpacity onPress={() => onSubmit(mobile)}
             style={{borderWidth:1, marginTop:35, paddingVertical:8, backgroundColor:'pink', borderColor:'pink', borderRadius:15}}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, color:'white'}}>
                Login
                
                </Text>
              
            </TouchableOpacity>
            <Text style={{color:'plum', fontWeight:'800', textAlign:'center', paddingTop:110,}}> Read User License Agreement</Text>    
         
           
        </View>
            
        </View>
        );
    };
       
    SignIn.defaultProps = {
        onsubmit: null,
    };
    export default SignIn;
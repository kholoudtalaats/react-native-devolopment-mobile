import *as React from 'react';
import {TouchableOpacity, View, Text, TextInput,ImageBackground} from 'react-native';
export const Login = ({navigation}) => {
    const [Email, setEmail] =React.useState('')
    const [password, setPassword] =React.useState('')
    return (
        <View style={{flex:1}}>
        <ImageBackground
        source={require('../../../assets/background5.jpg')}
         resizeMode='cover' style={{flex:1,justifyContent:'center'}}
        >
        <View style={{flex:1,alignItems:'center',justifyContent:"center",}}>
        
            <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>Login</Text>
            <View style={{width:240}}>
                <Text style={{fontSize:15,fontWeight:'400'}}>Email:</Text>
                <TextInput 
                    name="name"
                    placeholder='Enter email'
                    style={{
                        paddingHorizontal: 35,
                        paddingVertical: 5,
                        borderWidth: 1,
                        borderRadius: 0,
                        borderColor: 'gray',
                        marginTop: 10,}}
                        onChangeText={(Email) => {
                            setEmail(Email)
                        }}
                        value={Email}
                        keyboardType="email-address"
                        autoFocus
                />
                <TextInput
                    name="name"
                    placeholder='Enter password'
                    style={{
                        paddingHorizontal: 35,
                        paddingVertical: 5,
                        borderWidth: 1,
                        borderRadius: 0,
                        borderColor: 'gray',
                        marginTop: 10,}}
                        onChangeText={(password) => {
                            setPassword(password)
                        }}
                        value={password}
                        secureTextEntry
                /> 
                <TouchableOpacity 
                 onPress={() => navigation.navigate("Todo")}
                    style={{borderWidth:1, marginTop:35, paddingVertical:8, backgroundColor:'pink', borderColor:'pink', borderRadius:15}} >
                    <Text style={{textAlign:'center',fontWeight:'700'}}>Singin</Text>
                </TouchableOpacity>
            </View>
              

            
        </View>
        </ImageBackground>
        </View>
    );
};
export default Login;
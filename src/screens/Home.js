import * as React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, Keyboard, TextInput, Button } from 'react-native';
import styles from './auth/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    password: Yup.string(),
      
    repeatPassword: Yup.string()
      .min(8)
      .oneOf([Yup.ref('password')], 'your password do not match.')
      .required('confirm password is required.'),
      
  });

export const Home = () => {
    const [Email, setEmail] = React.useState('')
    const [password, setPassword] =React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    
    const onSubmit = () => {
        console.log("press me", Email)
    }
   
     return (
     
     
      <Formik initialValues={{
        password: '',
        repeatPassword: '',
      }}
      validationSchema={SignupSchema}
      >
      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit}) => (

        <View style={styles.container}>
            <Text style={{fontSize:40, fontWeight:'bold', color: 'plum'}}> Sign Up </Text>
        <View style={{width:200}}>
            <TextInput
            name="name"
            placeholder="Email"
            style={styles.input}
            onChangeText={(Email) => {
                setEmail(Email)
            }}
              value={Email}
              keyboardType="email-address"
              autoFocus 
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
            <TextInput
            name="name"
            placeholder="repeat password"
            style={styles.input}
            onChangeText={(repeatPassword) => {
                setRepeatPassword(repeatPassword)
                handleChange(repeatPassword)
            }}
              value={repeatPassword}
              onBlur={() => setFieldTouched(repeatPassword)}
              secureTextEntry 
            />
            {touched.repeatPassword && errors.repeatPassword && (
            <Text style={styles.errorTxt}>{errors.repeatPassword}</Text>
            )}
            <TouchableOpacity onPress={onSubmit} style={{borderWidth:1, marginTop:35, paddingVertical:8, backgroundColor:'pink', borderColor:'pink', borderRadius:15}}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'white'}}>
                Sign Up
                
                </Text>
              
            </TouchableOpacity>
            <Text style={{color:'plum', fontWeight:'800', textAlign:'center', paddingTop:110,}}> Read User License Agreement</Text>    
         
        </View>
            
        </View>
        )}
     </Formik>
        )}
       
       
Home.defaultProps = {
    onsubmit: null,
};
export default Home;
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { date } from 'yup';

const Item = ({ title }) => (
    <View style={styles.Item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Home= () => {
    const [image, setImage] = useState([
        {
            id: 1,
            image: require('../../assets/ham.png')   
        },
        {
            id: 1,
            image: require('../../assets/ham.png')  
        },
        {
            id: 1,
            image: require('../../assets/ham.png')  
        },
       
    ]);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hi there</Text>
            <FlatList
                horizontal
    showsHorizontalScrollIndicator={false}
                data={image}
                renderItem={({ item }) => (
            <Image 
                source={item.image}
                style={{
                    width:150,
                    height:200,
                    borderWidth:2,
                    resizeMode:'contain',
                    margin:8
                }}
            />
                )}
               />
                    
                
        </SafeAreaView>
    )
};
  
const styles = StyleSheet.create({
        text: {
        fontSize: 60,
    },
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    Item: {
        backgroundColor:'yellow'

    },
});


export default Home;
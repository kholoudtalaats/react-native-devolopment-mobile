import { useEffect, useState } from 'react';
import *as React from 'react-native';
import {View,ImageBackground ,Text,Image , TextInput, TouchableOpacity, FlatList} from 'react-native';
import { IconButton } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import { getusers } from '../../redux/store/users';

export const Todo =()=>{
    const {usersListData} =useSelector((state)=>state.users);
    const dispatch =useDispatch();
       useEffect(() => {
        dispatch(getusers());
        })
    
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState ([]);
    const [editedTodo, setEditedTodo]=useState(null);
    const handelAddTodo = () => {

        if(todo === "") {
            return;
        }
         setTodoList([...todoList, {id: Date.now().toString(), title: todo }])
         setTodo("");
    }; 
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !==id)
        setTodoList(updatedTodoList);
       
    };
    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
    };
    const handelUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
            
            if(item.id === editedTodo.id){
                return{...item, title: todo}
            }
            return item;
        });
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
    };
    const renderTodos = ({item, index}) => {
        return (
            <View 
            style={{
                backgroundColor:"#e6e6fa",
                borderRadius:6,
                paddingHorizontal:6,
                paddingVertical:12,
                marginBottom:12,
                flexDirection:'row',
                alignItems:'center',
               
              
                }}
            >
            
                <Text 
                style={{
                    color:'white',
                    fontSize:20,
                    fontWeight:'800',
                    flex:1,
                    fontStyle:'normal',
                    textShadowColor:'#b0c4de',
                    textShadowOffset:{width:0,height:2},
                    textShadowRadius:3
                    }}>{item.title}</Text>
                <IconButton icon="pencil" iconColor='#d8bfd8' onPress={() => handleEditTodo(item)}/>
                <IconButton icon="trash-can" iconColor='#ffb6c1' onPress={() => handleDeleteTodo(item.id)} />
            </View>
        );
    };
  
return (
    <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1,backgroundColor:'white'}}>
        <ImageBackground 
        source={require('../../../assets/background4.jpg')}
         resizeMode='cover' style={{flex:1,justifyContent:'center'}}>
         <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <Image source={require('../../../assets/person3.jpg')} 
            style={{width:40,height:40,resizeMode:'contain',borderRadius:500}}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{color:'white',fontWeight:'400'}}>kholoud talaat</Text>
            <Text style={{color:"gray"}}>kh22@gmail.c</Text>
            </View>
            
         </View>
            <View style={{flexDirection:'column',alignItems:'flex-start',marginTop:30}}>
            <FlatList
            data={usersListData}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) => {
                return (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                );
            }}
        />
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Feather name='sun' color="white" size={20}/>
                    <Text 
                        style={{fontWeight:'900',color:'white',marginLeft:6}}
                    >My Day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
                    <Feather name='star' color="white" size={20}/>
                    <Text 
                        style={{fontWeight:'900',color:'white',marginLeft:6}}
                    >Important</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
                    <Feather name='map' color="white" size={20}/>
                    <Text 
                        style={{fontWeight:'900',color:'white',marginLeft:6}} 
                    >Planned</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:20 }}>
                    <Feather name='user' color="white" size={20}/>
                    <Text 
                        style={{fontWeight:'900',color:'white',marginLeft:6}}
                    >Assigned to me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
                    <Feather name='flag' color="white" size={20}/>
                    <Text 
                        style={{fontWeight:'900',color:'white',marginLeft:6}}
                    >Flagged email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
                    <Feather name='home' color="white" size={20}/>
                    <Text 
                        style={{fontWeight:'900',color:'white',marginLeft:6}}
                    >Tasks</Text>
                </TouchableOpacity>
        </View>
    <View>
    <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
            <Feather name='list' color="white" size={25}/>
            <Text 
                style={{fontWeight:'900',color:'white',marginLeft:6}}
            >Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
            <Feather name='list' color="white" size={25}/>
            <Text 
                style={{fontWeight:'900',color:'white',marginLeft:6}}
            >Yasterday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
            <Feather name='list' color="white" size={25}/>
            <Text 
                style={{fontWeight:'900',color:'white',marginLeft:6}}
            >Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20,
            }}>
            <Feather name='plus' color="white" size={20}/>
            <Text style={{fontWeight:'900',color:'white'}}>New List</Text>
            <Feather name='plus-square' color="white" size={20}/>
        </TouchableOpacity>
    </View>
         </ImageBackground>
            
        </View>
        <View style={{flex:2.2,}}>
        <ImageBackground 
        source={require('../../../assets/background4.jpg')}
         resizeMode='cover' style={{flex:1,justifyContent:'center'}}>
        <TextInput
            style={{
                borderWidth:2,
                borderColor:'#fff0f5',
                borderRadius:60,
                paddingVertical:6,
                paddingHorizontal:16,
                marginTop:30,
                shadowColor:'black',
                shadowOffset:{width:0,height:2},
                shadowOpacity:0.8,
                shadowRadius:3,
                elevation:5
            }} 
            placeholder='Add a task'
            value={todo}
            onChangeText={(userText) => setTodo(userText)}
        />
        {
            editedTodo ? (
                <TouchableOpacity
            style={{
                backgroundColor:'#fff0f5', 
                borderRadius:6,
                paddingVertical:12,
                marginVertical:20,
                alignItems:'center',
                shadowColor:'black',
                shadowOffset:{width:0,height:4},
                shadowOpacity:0.8,
                shadowRadius:3,
               
            }}
            onPress={() => handelUpdateTodo()}
        >
            <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Save</Text>
        </TouchableOpacity>
            ):(
                <TouchableOpacity
            style={{
                backgroundColor:'#ffb6c1',
                borderRadius:6,
                paddingVertical:12,
                marginVertical:20,
                alignItems:'center',
                shadowColor:'black',
                shadowOffset:{width:0,height:2},
                shadowOpacity:0.8,
                shadowRadius:3,
            }}
            onPress={() => handelAddTodo()}
        >
            <Text 
            style={{color:'black',fontWeight:'bold',fontSize:20}}
            >Add</Text>
        </TouchableOpacity>  
            )
        }
        
        <FlatList
            data={todoList} renderItem={renderTodos}
        />
       
       
        </ImageBackground>
        </View>
    </View>
);
};
export default Todo;
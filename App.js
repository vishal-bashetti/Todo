import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import Todo from './components/todoitems'
import Addtodo from './components/addtodo';

export default function App() {
  const [todos, settodos] = useState([
    {text:'king of all time',key:'1'},
    {text:'works fine ',key:'2'},
    {text:'better then yesterday',key:'3'}
  ])

  const presshandler=(key)=>{
    settodos((prevtodos)=>
    {
      return prevtodos.filter(todo=>todo.key!=key);
    });
  }
  const submithandler=(text)=>{
    settodos((prevtodos)=>{
      return[
        {text: text, key:Math.random().toString()},
        ...prevtodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo  submithandler={submithandler}/>
          <View style={styles.list}>
              <FlatList 
              data={todos}
              renderItem={({item})=>(
                <Todo item={item} presshandler={presshandler}/>
              )}
              />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding:20,
  }
});

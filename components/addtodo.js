import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Addtodo({submithandler}){
    const [text, setText] = useState('');

    const changehandler=(val)=>{
       setText(val);
    } 

return(
    <View>
        <TextInput style={styles.input}
         placeholder='new Todos..'
        onChangeText={changehandler}>
            
        </TextInput>
        <Button onPress={()=>submithandler(text)} title ='add todo' color ='coral' />
    </View>
)

}

const styles=StyleSheet.create({
input:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical :6,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
}
})

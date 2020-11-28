import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function todoitems({item, presshandler})
{
    return(
        <TouchableOpacity onPress={()=> presshandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
item:{
    padding:15,
    marginTop:15,
    borderColor:'black',
    borderRadius:10,
    borderWidth:1,
}
})
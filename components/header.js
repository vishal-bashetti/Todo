import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header(){
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My Todoss</Text>
        </View>
    )
}

const styles=StyleSheet.create({
header:{
    paddingTop:30,
    backgroundColor:'orange',
    borderWidth:1,
},
text:{
    textAlign:'center',
}
})
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import BigCardCarusel from '../components/BigCardCarusel'

export default function Home({navigation}){
    //navigation.openDrawer()
    return(
        <ScrollView style={styles.container}>
           <BigCardCarusel navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
 container:{
     height:100,
     backgroundColor:'white'
 }
});
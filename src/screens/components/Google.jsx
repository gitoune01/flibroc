import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/themes'

const Google = () => {
  return (
    <TouchableOpacity onPress={()=> console.log('hi')} style={styles.container}>
       <Image style={styles.gooimg} source={require('../../assets/google.png')}/>
    </TouchableOpacity>
  )
}

export default Google

const styles = StyleSheet.create({
   container:{
      backgroundColor:"#4285F4",
      width:'40%',
      height:55,
      borderRadius:8,
      alignItems: 'center',
      justifyContent:'center',
      
   },
   gooimg:{
     height:30,
     width:30,
     
   }

})
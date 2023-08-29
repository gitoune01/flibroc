import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { colors } from '../../utils/themes'

const Button = ({title, onPress, style}) => {
   console.log('Button')

  return (
    <TouchableOpacity activeOpacity={0.6} style={{...styles.btnCont,...style}} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default memo(Button)

const styles = StyleSheet.create({
  btnCont:{
    backgroundColor:colors.primary,
    padding:8,
    borderRadius:10,
    marginTop:25,
  },
  txt:{
     color:'#ffffff',
     textAlign:'center',
     fontWeight:'bold',
     fontSize:16,
     paddingVertical:10,

  }


})
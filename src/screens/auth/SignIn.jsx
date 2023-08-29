import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeadAuth from '../components/HeadAuth'
import Input from '../components/Input'
import CheckBox from '../components/CheckBox'
import { colors } from '../../utils/themes'
import Button from '../components/Button'
import Google from '../components/Google'
import Config from 'react-native-config'

const SignIn = () => {

  
const onSignOn= () => {
  console.log("got it")
}


   return (
    <View style={styles.container}>
       <HeadAuth title={"Sign In"} />
        <Input label={'Email'} placeholder={'example@somedomain.com'}/>
       <Input label={'Password'} placeholder={'***********'} isPassword/>
         <Button style={styles.btnComp} title={'Sign In'}  />
       <View style={styles.lineBx}>
          <View style={styles.line}></View>
            <Text style={styles.txt}> Or sign up with</Text>
          <View style={styles.line}></View>
       </View>
        <View  style={styles.contGoo}>
       <Google />
        </View>
        <Text style={styles.switchtxt}>Have no account yet?<Text onPress={onSignOn} style={styles.intxt}> Sign In</Text></Text>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({

  container: {
    marginHorizontal:24
    
  },
  agreeBox:{
     flexDirection:'row',
     alignItems: 'center'
  },
  agree:{
    color: colors.primary,

  },
  btnComp:{
   marginTop:40
  },
  lineBx:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    height:24

  },
  line:{
   flexGrow:1,
   height:1,
   backgroundColor:colors.secondary,
   alignSelf: 'center',
  

  },
  txt:{
    paddingHorizontal:4,
    alignSelf: 'center',
    verticalAlign:'middle',
    fontSize:16,
    lineHeight:18,
    color:colors.primary
    
  },
  contGoo:{
    marginTop:25,
    alignItems: 'center',
  },
  switchtxt:{
    color:colors.primary,
    marginTop:15,
    textAlign: 'center',
  },
  intxt:{
    color:colors.tertiary,

  }
})
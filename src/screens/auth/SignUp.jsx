import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeadAuth from '../components/HeadAuth'
import Input from '../components/Input'
import CheckBox from '../components/CheckBox'
import { colors } from '../../utils/themes'
import Button from '../components/Button'
import Google from '../components/Google'
import Config from 'react-native-config'

const SignUp = () => {
  const [checked, setChecked] = useState(false)
  
const onSignIn = () => {
  console.log("got it")
}


  useEffect(() => {
     console.log("ENV",Config.VAR)

  },[])
  return (
    <View style={styles.container}>
       <HeadAuth title={"Sign Up"} />
       <Input label={'Name'} placeholder={'John Doe'}/>
       <Input label={'Email'} placeholder={'example@somedomain.com'}/>
       <Input label={'Password'} placeholder={'***********'} isPassword/>
       <View style={styles.agreeBox}>
         <CheckBox  checked={checked} onChecked={setChecked} />
         <Text style={styles.agree}>I agree with Terms & Privacy</Text>
       </View>
       <Button style={styles.btnComp} title={'Sign Up'} />
       <View style={styles.lineBx}>
          <View style={styles.line}></View>
            <Text style={styles.txt}> Or sign up with</Text>
          <View style={styles.line}></View>
       </View>
        <View  style={styles.contGoo}>
       <Google />
        </View>
        <Text style={styles.switchtxt}>Have already an account ?<Text onPress={onSignIn} style={styles.intxt}> Sign In</Text></Text>
    </View>
  )
}

export default SignUp

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
   marginTop:5
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
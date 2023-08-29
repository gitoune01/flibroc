import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import Button from '../components/Button';
import { colors } from '../../utils/themes';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/splash_image.png')}
        resizeMode="contain"
      />
    <View style={{marginTop:60}}>
      <Text style={styles.title}>Find</Text>
      <Text style={styles.intxt}>All You Need</Text>
      <Text style={styles.title}>Here!</Text>
    </View>
    <Button  title='Sign Up'/>
     <Pressable hitSlop={20}>
        <Text style={styles.sitxt}>Sign In</Text>
     </Pressable>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf:'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  intxt: {
    color:colors.secondary,
    textDecorationLine: 'underline',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  sitxt:{
    color:colors.primary,
    fontSize:16,
    fontWeight: 'bold',
    marginTop:30,
   textAlign:'center',

  }
});

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors } from '../../utils/themes';

const HeadAuth = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image  style={styles.img} source={require('../../assets/arrow_back.png')} />
      </Pressable>
      <Text  style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeadAuth;

const styles = StyleSheet.create({
 container:{
   flexDirection:'row',
   alignItems: 'center',
   marginHorizontal:24,
   marginTop:10
 },
 
 
  img:{
    width:25,
    height:25,
 },
 title:{
    color:colors.primary,
    fontSize:26,
    fontWeight:'500',

    paddingHorizontal:16
  }

});

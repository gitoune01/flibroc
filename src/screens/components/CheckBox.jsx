import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { colors } from '../../utils/themes';

const   CheckBox = ({checked, onChecked}) => {

  console.log(checked)
  return (
    <TouchableOpacity onPress={()=> onChecked(!checked)} style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.checkIcon} source={require('../../assets/iconcheck.png')} />
        
        </View>
      ):null}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container:{
     color: colors.primary,
     height:22,
     width:22,
     borderWidth:1,
     borderRadius:4,
    marginLeft:24,
    marginRight:10,
    marginVertical:20,
  },
  innerContainer: {
    backgroundColor: colors.primary,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  checkIcon: {
    width:12,
    height:9
  },
  agree:{

  }


});

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {colors} from '../../utils/themes';

const Input = ({label, placeholder, isPassword}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onEyePress = () => {
    setIsVisible(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputCont}>
        <TextInput
          secureTextEntry={isPassword && !isVisible}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={onEyePress} style={styles.iconBox}>
            {!isVisible ? (
              <Image
                style={styles.icon}
                source={require('../../assets/eye.png')}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require('../../assets/eye_closed.png')}
              />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 24,
  },

  inputCont: {
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    padding: 5,
  },
  input: {
    paddingHorizontal: 16,

    marginLeft: 10,
    flexGrow: 1,
  },
  label: {
    marginVertical: 8,
    color: colors.primary,
    fontWeight: '400',
  },
  iconBox: {
    marginHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

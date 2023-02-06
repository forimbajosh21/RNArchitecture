import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {RootStackProps} from 'common/models/types';

import styles from './styles';

const LoginScreen: React.FC<RootStackProps<'LOGIN'>> = ({navigation}) => {
  const handleGoToLogin = () => navigation.navigate('HOME');

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Login.</Text>
      <Pressable onPress={handleGoToLogin}>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {RootStackProps} from 'common/models/types';

import styles from './styles';

const HomeScreen: React.FC<RootStackProps<'HOME'>> = ({navigation}) => {
  const handleGoToLogin = () => navigation.navigate('LOGIN');

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home.</Text>
      <Pressable onPress={handleGoToLogin}>
        <Text>Go back to Login</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

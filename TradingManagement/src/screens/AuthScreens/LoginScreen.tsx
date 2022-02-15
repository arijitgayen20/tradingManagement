import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations/authNavigation';
import * as Routes from '../../utils/Routes';
type LoginProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: LoginProps) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate(Routes.OtpScreen)}>
        LoginScreen
      </Text>
    </View>
  );
};

export default LoginScreen;

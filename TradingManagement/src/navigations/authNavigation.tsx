import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Routes from '../utils/Routes';
import Screens from '../screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  NewPasswordScreen: undefined;
  OtpScreen: undefined;
  ResetPassword: undefined;
  SuccessScreen: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.LoginScreen}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={Routes.LoginScreen}
        component={Screens.LoginScreen}
      />
      <AuthStack.Screen
        name={Routes.NewPasswordScreen}
        component={Screens.NewPasswordScreen}
        options={{title: ''}}
      />
      <AuthStack.Screen name={Routes.OtpScreen} component={Screens.OtpScreen} />
      <AuthStack.Screen
        name={Routes.ResetPassword}
        component={Screens.ResetPassword}
      />
      <AuthStack.Screen
        name={Routes.SuccessScreen}
        component={Screens.SuccessScreen}
        options={{title: ''}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;

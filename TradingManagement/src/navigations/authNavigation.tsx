import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Routes from '../utils/Routes';
import Screens from '../screens';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation({}) {
  return (
    <AuthStack.Navigator initialRouteName={Routes.LoginScreen}>
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
        options={{title: ''}}
      />
      <AuthStack.Screen
        name={Routes.SuccessScreen}
        component={Screens.SuccessScreen}
        options={{title: ''}}
      />
    </AuthStack.Navigator>
  );
}

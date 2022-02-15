import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../screens';
import * as Routes from '../utils/Routes';
import AuthNavigation from './authNavigation';

const RootStack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.Loading}>
        <RootStack.Screen
          name={Routes.Loading}
          component={Screens.LoadingScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={Routes.Auth}
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        {/* <RootStack.Screen
          name={Routes.App}
          component={AppNavigation}
          options={{headerShown: false}}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

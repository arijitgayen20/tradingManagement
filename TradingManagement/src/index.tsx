import React from 'react';
import {StatusBar} from 'react-native';
import Navigations from './navigations';

export default function () {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'#FFF'}
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      <Navigations />
    </>
  );
}

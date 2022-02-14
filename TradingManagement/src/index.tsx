import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {AnimatedInput, ButtonComponent} from './components';
import {Colors} from './styles';

export default function () {
  const [name, setName] = useState<string>('');
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'#FFF'}
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: '80%'}}>
          <AnimatedInput
            value={name}
            onChange={(e: string) => setName(e)}
            placeholder={'Name'}
            multiline={false}
          />
        </View>
        <View style={{width: '80%', height: 60, marginTop: 10}}>
          <ButtonComponent
            backgroundColor={'#ffc000'}
            textColor={Colors.WhiteColor}
            isDisabled={false}
            onPressed={() => console.log('Button pressed')}
            title={'Press me'}
          />
        </View>
      </View>
    </>
  );
}

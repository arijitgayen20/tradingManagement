import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations/authNavigation';
import * as Routes from '../../utils/Routes';
import LinearGradient from 'react-native-linear-gradient';
import {LoginStyles, styles} from './styles';
import {Colors} from '../../styles';
import {
  HeaderComponent,
  AnimatedInput,
  ButtonComponent,
} from '../../components';

type NewPasswordProps = NativeStackScreenProps<
  AuthStackParamList,
  'NewPasswordScreen'
>;

const NewPasswordScreen = ({navigation}: NewPasswordProps) => {
  const [name, setName] = useState<string>('');
  return (
    <>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        <LinearGradient
          start={{x: 0, y: 0.35}}
          end={{x: 0, y: 1}}
          colors={[Colors.linear1, Colors.linear2, Colors.linear3]}
          style={styles.container}>
          <HeaderComponent onPressed={() => navigation.goBack()} />
          <Text style={styles.headerText}>Create New Password</Text>
          <Text style={styles.descriptionText}>
            Your New Password Password Must be Diffarent From Previous Used
            Password
          </Text>
          <View style={styles.inputView}>
            <AnimatedInput
              value={name}
              onChange={(e: string) => setName(e)}
              placeholder={'Password'}
              multiline={false}
              showIcon={false}
              textColor={Colors.WhiteColor}
              keyType={'default'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputView}>
            <AnimatedInput
              value={name}
              onChange={(e: string) => setName(e)}
              placeholder={'Confirm Password'}
              multiline={false}
              showIcon={false}
              textColor={Colors.WhiteColor}
              keyType={'default'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonView}>
            <ButtonComponent
              textColor={Colors.DarkBlueColor}
              title={'Reset Now'}
              backgroundColor={Colors.WhiteColor}
              isDisabled={false}
              onPressed={() => {}}
            />
          </View>
          <Text style={LoginStyles.resetPasswordText}>
            I remembar password.{' '}
            <Text
              style={{color: Colors.OrangeColor}}
              onPress={() => navigation.replace(Routes.LoginScreen)}>
              Login
            </Text>
          </Text>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
};

export default NewPasswordScreen;

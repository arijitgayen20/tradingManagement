import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// Packages
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations/authNavigation';

// components
import * as Routes from '../../utils/Routes';
import {AnimatedInput, ButtonComponent} from '../../components';

// Style
import GraphIcon from '../../assets/icons/ic_graph.svg';
import {Colors} from '../../styles';
import EmailIcon from '../../assets/icons/ic_email.svg';
import PasswordIcon from '../../assets/icons/ic_lock.svg';
import {LoginStyles} from './styles';

type LoginProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <LinearGradient
      start={{x: 0, y: 0.35}}
      end={{x: 0, y: 1}}
      colors={[Colors.linear1, Colors.linear2, Colors.linear3]}
      style={LoginStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
        <View>
          <View style={LoginStyles.iconContainer}>
            <GraphIcon
              width={Dimensions.get('screen').width}
              height={Dimensions.get('screen').height / 3}
            />
          </View>
          <View style={LoginStyles.loginContainer}>
            <View style={LoginStyles.headerTextContainer}>
              <Text style={LoginStyles.headerText}>Welcome Back</Text>
              <Text style={LoginStyles.headerSubtitle}>
                Please Enter Your Login Details and Start Trading
              </Text>
            </View>
            <View style={LoginStyles.animatedInputContainer}>
              <AnimatedInput
                multiline={false}
                placeholder={'Email Address'}
                value={email}
                onChange={text => setEmail(text)}
                textColor={Colors.WhiteColor}
                keyType={'email-address'}
                icon={<EmailIcon />}
                showIcon={true}
              />
            </View>
            <View style={LoginStyles.animatedInputContainer}>
              <AnimatedInput
                multiline={false}
                placeholder={'Password'}
                value={password}
                onChange={text => setPassword(text)}
                textColor={Colors.WhiteColor}
                keyType={'default'}
                icon={<PasswordIcon />}
                secureTextEntry={true}
                showIcon={true}
              />
            </View>
            <Text style={LoginStyles.resetPasswordText}>
              Forgot Password?{' '}
              <Text
                style={{color: Colors.OrangeColor}}
                onPress={() => navigation.navigate(Routes.ResetPassword)}>
                Reset Now
              </Text>
            </Text>
            <View style={LoginStyles.buttonContainer}>
              <ButtonComponent
                backgroundColor={Colors.WhiteColor}
                textColor={Colors.DarkBlueColor}
                isDisabled={false}
                title={'Login Now'}
                onPressed={() => {
                  console.log(email);
                  console.log(password);
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text style={LoginStyles.resetPasswordText}>
          Don't You Have Any Account?{' '}
          <Text
            style={{color: Colors.OrangeColor}}
            onPress={() => console.log('pressed')}>
            Signup
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

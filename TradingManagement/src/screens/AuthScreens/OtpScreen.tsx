import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations/authNavigation';
import * as Routes from '../../utils/Routes';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {Colors} from '../../styles';
import {HeaderComponent, OtpInput, ButtonComponent} from '../../components';
import OtpEmailIcon from '../../assets/icons/ic_otpEmail.svg';

type OtpScreenProps = NativeStackScreenProps<AuthStackParamList, 'OtpScreen'>;

const OtpScreen = ({navigation}: OtpScreenProps) => {
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
          <View style={styles.topView}>
            <View style={styles.outsideRound} />
            <View style={styles.centerRound}>
              <View style={styles.iconView}>
                <OtpEmailIcon />
              </View>
            </View>
          </View>
          <Text style={styles.headerText}>Check Your Email</Text>
          <Text style={styles.descriptionText}>
            We Have Sent OTP to Recover {'\n'}
            Your Account
          </Text>
          <View style={{width: '85%', height: 60, marginTop: 40}}>
            <OtpInput
              numberOfInput={4}
              onChange={e => setName(e)}
              textInputBackgroundColor={Colors.LightBlueColor}
            />
          </View>
          <Text style={styles.resendOtp}>Resend OTP</Text>
          <View style={{width: '70%', marginTop: 30, height: 60}}>
            <ButtonComponent
              textColor={Colors.DarkBlueColor}
              title={'Submit'}
              backgroundColor={Colors.WhiteColor}
              isDisabled={false}
              onPressed={() => {
                navigation.navigate(Routes.NewPasswordScreen);
              }}
            />
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OtpScreen;

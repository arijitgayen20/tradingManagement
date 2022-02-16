import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

// Component
import {AuthStackParamList} from '../../navigations/authNavigation';
import * as Routes from '../../utils/Routes';
import {HeaderComponent, ButtonComponent} from '../../components';

// Styles
import {LoginStyles, styles} from './styles';
import {Colors} from '../../styles';
import SecurePasswordComponent from '../../components/SecurePasswordComponent';

type NewPasswordProps = NativeStackScreenProps<
    AuthStackParamList,
    'NewPasswordScreen'
>;

const NewPasswordScreen = ({navigation}: NewPasswordProps) => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [matched, setMatched] = useState<boolean>(false);

    useEffect(() => {
        if (
            newPassword !== '' &&
            confirmPassword !== '' &&
            newPassword === confirmPassword
        ) {
            setMatched(true);
        }
    }, [newPassword, confirmPassword]);

    return (
        <TouchableWithoutFeedback
            style={LoginStyles.screen}
            onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                start={{x: 0, y: 0.35}}
                end={{x: 0, y: 1}}
                colors={[Colors.linear1, Colors.linear2, Colors.linear3]}
                style={styles.container}>
                <HeaderComponent onPressed={() => navigation.goBack()} />
                <Text style={styles.headerText}>Create New Password</Text>
                <Text style={styles.descriptionText}>
                    Your New Password Password Must be Diffarent From Previous
                    Used Password
                </Text>
                <View style={styles.inputView}>
                    <SecurePasswordComponent
                        value={newPassword}
                        onChangeText={text => setNewPassword(text)}
                        placeholderText={'Password'}
                        textColor={Colors.WhiteColor}
                    />
                </View>
                <View style={styles.inputView}>
                    <SecurePasswordComponent
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        placeholderText={'Confirm Password'}
                        textColor={Colors.WhiteColor}
                        isMatch={matched}
                    />
                </View>
                <View style={styles.buttonView}>
                    <ButtonComponent
                        textColor={Colors.DarkBlueColor}
                        title={'Reset Now'}
                        backgroundColor={Colors.WhiteColor}
                        isDisabled={false}
                        onPressed={() => {
                            navigation.replace(Routes.SuccessScreen);
                        }}
                    />
                </View>
                <Text style={LoginStyles.resetPasswordText}>
                    I remember password.{' '}
                    <Text
                        style={{color: Colors.OrangeColor}}
                        onPress={() => navigation.replace(Routes.LoginScreen)}>
                        Login
                    </Text>
                </Text>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default NewPasswordScreen;

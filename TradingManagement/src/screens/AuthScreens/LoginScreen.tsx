import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';

// Packages
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// components
import {AuthStackParamList} from '../../navigations/authNavigation';
import * as Routes from '../../utils/Routes';
import {AnimatedInput, ButtonComponent, SignupModal} from '../../components';

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
    const [toggleModal, setToggleModal] = useState<boolean>(false);

    const dimensions = Dimensions.get('screen');

    // useEffect(() => {
    //     if (toggleModal) {
    //         return <SignupModal isVisible={toggleModal} />;
    //     }
    // }, [toggleModal]);

    return (
        <LinearGradient
            start={{x: 0, y: 0.35}}
            end={{x: 0, y: 1}}
            colors={[Colors.linear1, Colors.linear2, Colors.linear3]}
            style={LoginStyles.screen}>
            <View style={LoginStyles.iconContainer}>
                <GraphIcon
                    width={dimensions.width}
                    height={dimensions.height * 0.33}
                />
            </View>
            <ScrollView style={{height: dimensions.height * 0.66}}>
                <KeyboardAvoidingView
                    style={LoginStyles.screen}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={-45}>
                    <View style={LoginStyles.loginContainer}>
                        <View style={LoginStyles.headerTextContainer}>
                            <Text style={LoginStyles.headerText}>
                                Welcome Back
                            </Text>
                            <Text style={LoginStyles.headerSubtitle}>
                                Please Enter Your Login Details and Start
                                Trading
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
                                icon={<EmailIcon fill={Colors.WhiteColor} />}
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
                                onPress={() =>
                                    navigation.navigate(Routes.ResetPassword)
                                }>
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
                    <View style={LoginStyles.signupContainer}>
                        <Text style={LoginStyles.resetPasswordText}>
                            Don't You Have Any Account?{' '}
                            <Text
                                style={{color: Colors.OrangeColor}}
                                onPress={() => setToggleModal(true)}>
                                Signup
                            </Text>
                        </Text>
                    </View>
                    {toggleModal && <SignupModal isVisible={toggleModal} />}
                </KeyboardAvoidingView>
            </ScrollView>
        </LinearGradient>
    );
};

export default LoginScreen;

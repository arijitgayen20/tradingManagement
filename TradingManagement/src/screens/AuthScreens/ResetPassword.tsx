import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
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
import PadlockIcon from '../../assets/icons/ic_padlock.svg';

type ResetPasswordProps = NativeStackScreenProps<
    AuthStackParamList,
    'ResetPassword'
>;
const ResetPassword = ({navigation}: ResetPasswordProps) => {
    const [name, setName] = useState<string>('');

    return (
        <TouchableWithoutFeedback
            style={LoginStyles.screen}
            onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                start={{x: 0, y: 0.35}}
                end={{x: 0, y: 1}}
                colors={[Colors.linear1, Colors.linear2, Colors.linear3]}
                style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={-45}>
                    <View style={styles.container}>
                        <HeaderComponent
                            onPressed={() => navigation.goBack()}
                        />
                        <View style={styles.topView}>
                            <View style={styles.outsideRound} />
                            <View style={styles.centerRound}>
                                <View style={styles.iconView}>
                                    <PadlockIcon />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.headerText}>Reset Password</Text>
                        <Text style={styles.descriptionText}>
                            Enter Your Email Asociated with {'\n'} Your Account
                            & We will Send an Email {'\n'} With Instruction to
                            Reset Your Password
                        </Text>
                        <View style={styles.inputView}>
                            <AnimatedInput
                                value={name}
                                onChange={(e: string) => setName(e)}
                                placeholder={'Email Address'}
                                multiline={false}
                                showIcon={false}
                                textColor={Colors.WhiteColor}
                                keyType={'email-address'}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <ButtonComponent
                                textColor={Colors.DarkBlueColor}
                                title={'Send Instruction'}
                                backgroundColor={Colors.WhiteColor}
                                isDisabled={false}
                                onPressed={() => {
                                    navigation.navigate(Routes.OtpScreen);
                                }}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default ResetPassword;

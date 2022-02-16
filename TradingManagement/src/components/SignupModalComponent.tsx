import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';

// Components
import {AnimatedInput, ButtonComponent} from '.';

// Styles
import {Colors, Fonts} from '../styles';
import {LoginStyles} from '../screens/AuthScreens/styles';
import CloseIcon from '../assets/icons/ic_close_circle.svg';
import RightAngleIcon from '../assets/icons/ic_right_angle.svg';
import ProfileIcon from '../assets/icons/ic_profile.svg';
import EmailIcon from '../assets/icons/ic_email.svg';
import PhoneIcon from '../assets/icons/ic_phone.svg';
import SecurePasswordComponent from './SecurePasswordComponent';
import RightArrowIcon from '../assets/icons/ic_right_arrow.svg';

interface SignupModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = props => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
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
        <Modal isVisible={props.isVisible} style={styles.modalView}>
            <View style={styles.modalContainerView}>
                <ScrollView style={LoginStyles.screen}>
                    <View style={styles.modalContentsView}>
                        <View style={styles.headerContainer}>
                            <Pressable onPress={props.onClose}>
                                <CloseIcon
                                    fill={Colors.DarkBlueColor}
                                    fillSecondary={Colors.MediumGrayColor}
                                />
                            </Pressable>
                            <Pressable
                                style={styles.loginContainer}
                                onPress={props.onClose}>
                                <Text style={styles.headerText}>Login</Text>
                                <RightAngleIcon />
                            </Pressable>
                        </View>
                        <View style={styles.contains}>
                            <Text style={styles.mainText}>
                                Sign up and {'\n'}Start Trading
                            </Text>
                            <Text style={styles.subTitle}>
                                A New and Exciting Way to Trade
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <AnimatedInput
                                value={name}
                                placeholder={'Full Name'}
                                multiline={false}
                                keyType={'default'}
                                onChange={text => setName(text)}
                                showIcon={true}
                                icon={<ProfileIcon />}
                                textColor={Colors.LightGrayColor}
                                borderColor={Colors.LightGrayColor}
                                userInputColor={Colors.BlackColor}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <AnimatedInput
                                value={email}
                                placeholder={'Email Address'}
                                multiline={false}
                                keyType={'email-address'}
                                onChange={text => setEmail(text)}
                                showIcon={true}
                                icon={<EmailIcon fill={Colors.BlueTextColor} />}
                                textColor={Colors.LightGrayColor}
                                borderColor={Colors.LightGrayColor}
                                userInputColor={Colors.BlackColor}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <AnimatedInput
                                value={phone}
                                placeholder={'Phone Number'}
                                multiline={false}
                                keyType={'number-pad'}
                                onChange={text => setPhone(text)}
                                showIcon={true}
                                icon={<PhoneIcon />}
                                textColor={Colors.LightGrayColor}
                                borderColor={Colors.LightGrayColor}
                                userInputColor={Colors.BlackColor}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <SecurePasswordComponent
                                value={newPassword}
                                onChangeText={text => setNewPassword(text)}
                                placeholderText={'Password'}
                                textColor={Colors.LightGrayColor}
                                borderColor={Colors.LightGrayColor}
                                userInputColor={Colors.BlackColor}
                                iconColor={Colors.BlueTextColor}
                                icon2Color={Colors.GreenColor}
                                isMatch={matched}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <SecurePasswordComponent
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                                placeholderText={'Confirm Password'}
                                textColor={Colors.LightGrayColor}
                                borderColor={Colors.LightGrayColor}
                                userInputColor={Colors.BlackColor}
                                iconColor={Colors.BlueTextColor}
                                icon2Color={Colors.GreenColor}
                                isMatch={matched}
                            />
                        </View>
                        <View style={LoginStyles.buttonContainer}>
                            <ButtonComponent
                                backgroundColor={Colors.BlueTextColor}
                                textColor={Colors.WhiteColor}
                                isDisabled={false}
                                title={'Login Now'}
                                onPressed={() => {
                                    console.log('pressed');
                                }}
                                icon={<RightArrowIcon />}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalContainerView: {
        backgroundColor: Colors.WhiteColor,
        height: '95%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalContentsView: {
        paddingHorizontal: 20,
        marginTop: 25,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontFamily: Fonts.Regular,
        color: Colors.BlueTextColor,
        fontWeight: '400',
        fontSize: 18,
    },
    loginContainer: {
        flexDirection: 'row',
        width: 75,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    contains: {
        paddingTop: 25,
    },
    mainText: {
        fontFamily: Fonts.Regular,
        fontSize: 30,
        fontWeight: '500',
        color: Colors.BlackColor,
    },
    subTitle: {
        fontFamily: Fonts.Regular,
        fontSize: 16,
        color: Colors.GrayTextColor,
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 40,
    },
});

export default SignupModal;

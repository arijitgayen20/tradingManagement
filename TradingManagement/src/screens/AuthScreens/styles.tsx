import {Dimensions, Platform, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../styles';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeareaView: {
        flex: 1,
    },
    topView: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outsideRound: {
        width: 205,
        height: 205,
        borderRadius: 103,
        borderColor: Colors.WhiteColor,
        borderWidth: 1,
        opacity: 0.2,
    },
    centerRound: {
        width: 165,
        height: 165,
        borderRadius: 83,
        borderColor: Colors.WhiteColor,
        borderWidth: 2,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconView: {
        height: 130,
        width: 130,
        borderRadius: 65,
        backgroundColor: Colors.BlueColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        marginTop: 20,
        color: Colors.WhiteColor,
        fontSize: 28,
        fontFamily: Fonts.Regular,
    },
    descriptionText: {
        marginTop: 20,
        color: Colors.WhiteColor,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: Fonts.Regular,
    },
    resendOtp: {
        fontSize: 16,
        fontFamily: Fonts.Regular,
        textAlign: 'center',
        fontWeight: '400',
        color: Colors.OrangeColor,
        marginTop: 20,
    },
    inputView: {
        width: '90%',
        marginTop: 30,
    },
    buttonView: {
        width: '90%',
        marginTop: 30,
        height: 60,
    },
});

export const LoginStyles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    iconContainer: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.33,
        justifyContent: 'center',
    },
    loginContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    headerTextContainer: {
        paddingTop: 15,
    },
    headerText: {
        fontFamily: Fonts.Regular,
        color: Colors.WhiteColor,
        fontWeight: '500',
        fontSize: 30,
    },
    headerSubtitle: {
        color: Colors.WhiteColor,
        fontFamily: Fonts.Regular,
        fontWeight: '400',
        fontSize: 16,
        marginTop: 10,
    },
    animatedInputContainer: {
        width: '98%',
        paddingTop: 35,
    },
    resetPasswordText: {
        color: Colors.WhiteColor,
        fontFamily: Fonts.Regular,
        fontWeight: '400',
        fontSize: 16,
        marginTop: 20,
    },
    buttonContainer: {
        width: '98%',
        height: 60,
        marginTop: 20,
    },
    signupContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export const SuccessStyles = StyleSheet.create({
    successInfoContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        height: '50%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

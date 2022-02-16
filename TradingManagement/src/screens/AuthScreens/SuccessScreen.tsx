import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Component
import {ButtonComponent} from '../../components';
import {AuthStackParamList} from '../../navigations/authNavigation';
import * as Routes from '../../utils/Routes';

// Style
import {LoginStyles, styles, SuccessStyles} from './styles';
import {Colors} from '../../styles';
import SuccesIcon from '../../assets/icons/ic_success.svg';

type SuccessScreenProps = NativeStackScreenProps<
    AuthStackParamList,
    'SuccessScreen'
>;

const SuccessScreen = ({navigation}: SuccessScreenProps) => {
    return (
        <TouchableWithoutFeedback
            style={LoginStyles.screen}
            onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                start={{x: 0, y: 0.35}}
                end={{x: 0, y: 1}}
                colors={[Colors.linear1, Colors.linear2, Colors.linear3]}
                style={LoginStyles.screen}>
                <View style={SuccessStyles.successInfoContainer}>
                    <View style={SuccessStyles.iconContainer}>
                        <SuccesIcon />
                    </View>
                    <Text style={LoginStyles.headerText}>Success!</Text>
                    <Text style={styles.descriptionText}>
                        Your Password Has Been Changed.
                    </Text>

                    <View style={styles.buttonView}>
                        <ButtonComponent
                            textColor={Colors.DarkBlueColor}
                            title={'Login to My Account'}
                            backgroundColor={Colors.WhiteColor}
                            isDisabled={false}
                            onPressed={() => {
                                navigation.replace(Routes.LoginScreen);
                            }}
                        />
                    </View>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default SuccessScreen;

import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// Components
import {AnimatedInput} from '.';

// Styles
import PasswordVisibleIcon from '../assets/icons/ic_password_visible.svg';
import PasswordNotVisibleIcon from '../assets/icons/ic_password_not_visible.svg';
import TickIcon from '../assets/icons/ic_tick.svg';

interface SecurePasswordProps {
    value: string;
    onChangeText: (val: string) => void;
    placeholderText: string;
    textColor: string;
    isMatch?: boolean;
    borderColor?: string;
    userInputColor?: string;
    iconColor: string;
    icon2Color?: string;
}

const SecurePasswordComponent: React.FC<SecurePasswordProps> = props => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <AnimatedInput
            value={props.value}
            onChange={props.onChangeText}
            placeholder={props.placeholderText}
            multiline={false}
            showIcon={true}
            textColor={props.textColor}
            keyType={'default'}
            secureTextEntry={!showPassword ? true : false}
            icon2={props.isMatch && <TickIcon fill={props.icon2Color} />}
            icon={
                showPassword ? (
                    <PasswordVisibleIcon fill={props.iconColor} />
                ) : (
                    <PasswordNotVisibleIcon fill={props.iconColor} />
                )
            }
            onPressIcon={() => setShowPassword(!showPassword)}
            userInputColor={props.userInputColor}
            borderColor={props.borderColor}
        />
    );
};

export default SecurePasswordComponent;

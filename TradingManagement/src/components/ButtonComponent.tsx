import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../styles';
interface ButtonComponentProps {
    backgroundColor: string;
    textColor: string;
    isDisabled: boolean;
    onPressed: () => void;
    title: string;
    icon?: Element;
}

const ButtonComponent: FC<ButtonComponentProps> = props => {
    return (
        <Pressable
            style={[
                styles.buttonContainer,
                {
                    backgroundColor: props.backgroundColor,
                },
            ]}
            disabled={props.isDisabled ? props.isDisabled : false}
            onPress={props.onPressed}>
            <View style={props.icon && styles.iconStyles}>
                <Text style={[styles.textStyle, {color: props.textColor}]}>
                    {props.title}
                </Text>
                {props.icon}
            </View>
        </Pressable>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
    },
    iconStyles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%',
        alignItems: 'center',
    },
});

/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
    Animated,
    KeyboardTypeOptions,
    LayoutChangeEvent,
    Pressable,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import {Colors, Fonts} from '../styles';
type AnimatedInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    multiline: boolean;
    showIcon: boolean;
    textColor: string;
    icon?: Element;
    keyType: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    onPressIcon?: () => void;
    icon2?: Element;
    borderColor?: string;
    userInputColor?: string;
};

const AnimatedInput: React.FC<AnimatedInputProps> = ({
    value,
    onChange,
    placeholder,
    multiline,
    showIcon,
    textColor,
    icon,
    keyType,
    secureTextEntry,
    onPressIcon,
    icon2,
    borderColor,
    userInputColor,
}) => {
    const [inputHeight, setHeight] = useState<null | number>(null);
    const [placeholderWidth, setWidth] = useState<null | number>(null);
    const animation = useRef(new Animated.Value(0)).current;
    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: placeholderWidth ? [0, -placeholderWidth / 4] : [0, -0],
    });
    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: inputHeight ? [0, -inputHeight / 2] : [0, -0],
    });
    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.9, 0.6],
    });
    const onFocus = () => animate(1.4);
    const onBlur = () => !value && animate(0);

    const animate = (val: number) => {
        Animated.spring(animation, {
            toValue: val,
            bounciness: 0,
            useNativeDriver: true,
        }).start();
    };
    return (
        <View
            style={[
                styles.container,
                {borderColor: borderColor ? borderColor : '#9DE5FF'},
            ]}
            onLayout={(e: LayoutChangeEvent) =>
                !inputHeight && setHeight(e.nativeEvent.layout.height)
            }>
            <View
                style={[
                    styles.placeholderContainer,
                    {height: inputHeight ? inputHeight : 0},
                ]}>
                <Animated.Text
                    style={[
                        styles.placeholder,
                        {color: textColor},
                        {transform: [{translateY}, {translateX}, {scale}]},
                    ]}
                    onTextLayout={e =>
                        !placeholderWidth &&
                        setWidth(e.nativeEvent.lines[0]?.width || 0)
                    }>
                    {placeholder}
                </Animated.Text>
            </View>
            <TextInput
                style={[
                    styles.input,
                    {
                        width: showIcon ? '80%' : '95%',
                        color: userInputColor
                            ? userInputColor
                            : Colors.WhiteColor,
                    },
                    multiline && {height: 100, textAlignVertical: 'top'},
                ]}
                onFocus={onFocus}
                keyboardType={keyType}
                onBlur={onBlur}
                onChangeText={onChange}
                multiline={multiline}
                secureTextEntry={secureTextEntry}
            />
            <Pressable
                onPress={onPressIcon}
                style={icon2 ? styles.icons : null}>
                {icon2}
                {showIcon && icon}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    placeholderContainer: {
        position: 'absolute',
        justifyContent: 'center',
    },
    placeholder: {
        fontSize: 22,
        position: 'absolute',
        color: Colors.WhiteColor,
        fontFamily: Fonts.Regular,
    },
    input: {
        width: '80%',
        paddingHorizontal: 10,
        fontSize: 18,
        fontFamily: Fonts.Regular,
        height: 60,
    },
    icons: {
        flexDirection: 'row',
        width: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default AnimatedInput;

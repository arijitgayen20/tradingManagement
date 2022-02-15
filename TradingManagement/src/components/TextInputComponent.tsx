import React, {useRef, useState} from 'react';
import {
  Animated,
  KeyboardTypeOptions,
  LayoutChangeEvent,
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
      style={styles.container}
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
            !placeholderWidth && setWidth(e.nativeEvent.lines[0]?.width || 0)
          }>
          {placeholder}
        </Animated.Text>
      </View>
      <TextInput
        style={[
          styles.input,
          {width: showIcon ? '80%' : '95%'},
          multiline && {height: 100, textAlignVertical: 'top'},
        ]}
        onFocus={onFocus}
        keyboardType={keyType}
        onBlur={onBlur}
        onChangeText={onChange}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />
      {showIcon && icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#9DE5FF',
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
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
    fontSize: 18,
    color: Colors.WhiteColor,
    fontFamily: Fonts.Regular,
    height: 60,
  },
});

export default AnimatedInput;

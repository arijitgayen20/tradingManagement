import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  LayoutChangeEvent,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Colors} from '../styles';
type AnimatedInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  multiline: boolean;
};

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  value,
  onChange,
  placeholder,
  multiline,
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
    outputRange: [1, 0.5],
  });
  const onFocus = () => animate(1);
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
          multiline && {height: 100, textAlignVertical: 'top'},
        ]}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChange}
        multiline={multiline}
      />
      <Image
        style={{width: 30, height: 30}}
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/01/09/40/34/1000_F_109403453_AGyw0S3VS2WfDoPTKvPLv8BgQqp93ct4.jpg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.GrayColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeholderContainer: {
    position: 'absolute',
    backgroundColor: Colors.ErrorColor,
    justifyContent: 'center',
  },
  placeholder: {
    fontSize: 22,
    position: 'absolute',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    backgroundColor: Colors.WhiteColor,
    color: '#999',
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
    fontSize: 18,
    height: 60,
  },
});

export default AnimatedInput;

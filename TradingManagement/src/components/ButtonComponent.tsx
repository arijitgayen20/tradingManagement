import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
interface ButtonComponentProps {
  backgroundColor: string;
  textColor: string;
  isDisabled: boolean;
  onPressed: () => void;
  title: string;
}

const ButtonComponent: FC<ButtonComponentProps> = props => {
  return (
    <Pressable
      style={[styles.buttonContainer, {backgroundColor: props.backgroundColor}]}
      disabled={props.isDisabled ? props.isDisabled : false}
      onPress={props.onPressed}>
      <Text style={[styles.textStyle, {color: props.textColor}]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
  },
});

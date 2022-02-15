import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts} from '../styles';
import BackArrow from '../assets/icons/ic_leftarrow.svg';

interface OtpInputProps {
  onPressed: () => void;
}

const HeaderComponent: FC<OtpInputProps> = props => {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.backView} onPress={props.onPressed}>
        <BackArrow />
        <Text style={styles.backText}>Back</Text>
      </Pressable>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
    backgroundColor: Colors.linear1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
  backText: {
    fontSize: 13,
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    color: Colors.WhiteColor,
    marginLeft: 10,
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

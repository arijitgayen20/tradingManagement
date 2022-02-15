import {View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import LogoIcon from '../../assets/icons/ic_logo.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/index';

type LoadingProps = NativeStackScreenProps<RootStackParamList, 'Loading'>;

const LoadingScreen = ({navigation}: LoadingProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 1500);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.safeareaView}>
      <View style={styles.containerCenter}>
        <LogoIcon />
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

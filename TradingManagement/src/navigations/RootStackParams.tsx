// import type {CompositeScreenProps} from '@react-navigation/native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParamList = {
  Loading: undefined;
  Auth: undefined;
  App: undefined;
};

export type AuthStackParams = {
  LoginScreen: undefined;
  NewPasswordScreen: undefined;
  OtpScreen: undefined;
  ResetPassword: undefined;
  SuccessScreen: undefined;
};
// export type LoadingScreenProps = {
//   Loading: undefined;
// };
// export type RootStackParam = CompositeScreenProps<
// NativeStackScreenProps<LoadingScreenProps, 'Loading'>,
// NativeStackScreenProps<RootStackParamList, 'Auth'>
// >;

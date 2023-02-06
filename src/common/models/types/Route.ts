import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParams = {
  LOGIN: undefined;
  HOME: undefined;
};

export type RootStackProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

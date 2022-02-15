import {Platform, StyleSheet} from 'react-native';
import * as Fonts from './fonts';
import * as Colors from './colors';

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  width100: {
    width: '100%',
    justifyContent: 'space-between',
  },
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAllCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paddingHorizontal: {
    paddingHorizontal: 30,
  },
});

export default _styles;

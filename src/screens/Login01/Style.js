import {StyleSheet} from 'react-native';
import { Responsive, Theme } from '../../libs';

const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getWidth(9),
    marginTop: getHeight(6)
  },
  HeroText: {
    marginVertical: getHeight(4)
  },
  SubmitArea_style: {
  }
});

export default styles;

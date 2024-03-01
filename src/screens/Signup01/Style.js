import {StyleSheet} from 'react-native';
import { Responsive } from '../../libs';

const {getHeight, getWidth} = Responsive

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

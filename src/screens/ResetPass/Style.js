import {StyleSheet} from 'react-native';
import { Responsive } from '../../libs';

const {getHeight, getWidth} = Responsive

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: getWidth(9),
    marginTop: getHeight(10)

  },
  mid: {
    marginTop: getHeight(5)
  }
});

export default styles;

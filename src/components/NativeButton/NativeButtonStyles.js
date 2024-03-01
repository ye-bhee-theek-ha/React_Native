import {StyleSheet} from 'react-native';

import {Theme, Responsive} from '../../libs';

const {AppFonts} = Responsive;

const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
  button: {
    borderRadius: Theme.borders.fullRadius,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: getWidth(1)
  },
  buttonText: {
    color: Theme.colors.white,
    fontSize: Theme.typography.btn.fontSize,
  },
  icon_container: {
    marginEnd: getWidth(1)
  },
  icon: {
    color: Theme.colors.black,
  }
});

export default styles;

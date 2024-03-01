import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';
import { TouchableOpacity } from 'react-native';

const Page_footer = ({
  btn_txt,
  info_text,
  OnPress,
  Page_footer_style
}) => {
  // Component logic here
  return (
    <View style={[styles.container, Page_footer_style]}>
      <Text style={styles.info_txt}>
        {info_text}
      </Text>
      <TouchableOpacity
        onPress={OnPress}
      >
        <Text style={styles.btn_txt}>
          {btn_txt}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Page_footer;

Page_footer.propTypes = {
  btn_txt: PropTypes.string,
  info_text: PropTypes.string,
  OnPress: PropTypes.func,
  Page_footer_style: PropTypes.object
};

Page_footer.defaultProps = {
  btn_txt: "testtxt",
  info_text: "test info",
  OnPress: () => null,
  Page_footer_style: {}
};

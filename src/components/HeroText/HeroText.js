import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';

const HeroText = ({
  Heading,
  Subheading,
  containerStyle,
}) => {
  // Component logic here
  return (
    <View style={containerStyle}>
      <Text style={styles.heading}>{Heading}</Text>
      <Text style={styles.subheading}>{Subheading}</Text>
    </View>
  );
}

export default HeroText;

HeroText.propTypes = {
  Heading: PropTypes.string,
  Subheading: PropTypes.string,
  containerStyle: PropTypes.object,
};

HeroText.defaultProps = {
  Heading: "Heading",
  Subheading: "Subheading",
  containerStyle: {}
};

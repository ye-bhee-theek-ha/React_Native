import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';

const Seperator = ({
  text
}) => {
  // Component logic here
  return (
  
    <View style={styles.container}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>

  );
}

export default Seperator;

Seperator.propTypes = {
  text: PropTypes.string
};

Seperator.defaultProps = {
  text: "or with"
};

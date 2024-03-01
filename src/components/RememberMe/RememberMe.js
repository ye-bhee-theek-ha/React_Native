import React, { useState } from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import PropTypes from 'prop-types';

import styles from './Style.js';
const RememberMe = ({
  isSelected,
  setSelection,
  checkboxStyle
}) => {
  // Component logic here
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    
    <View>
      {/* <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
      /> */}
    </View>
  );
}

export default RememberMe;

RememberMe.propTypes = {
  isSelected: PropTypes.bool,
  setSelection: PropTypes.func,
  checkboxStyle: PropTypes.object
};

RememberMe.defaultProps = {
  isSelected: false,
  setSelection: () => null,
  checkboxStyle: {}
};

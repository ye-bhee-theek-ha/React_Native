import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';
import InputBox from '../InputBox/InputBox.js';

const InputFeild = ({
  onChangeText,
  value,
  inputStyle,
  headerStyle,
  placeholder,
  header,
}) => {
  // Component logic here
  return (
    <View style={styles.Container}>
      <Text style={[styles.HeaderTxt , headerStyle]}>
        {header}
      </Text>
      <InputBox
        onChangeText={onChangeText}
        value={value}
        inputStyle={[styles.InputBox, inputStyle]}
        placeholder={placeholder}
      />
    </View>
  );
}

export default InputFeild;

InputFeild.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  inputStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  placeholder: PropTypes.string,
  header: PropTypes.string,
};

InputFeild.defaultProps = {
  value: "",
  inputStyle: {},
  headerStyle: {},
  placeholder: "",
  header: ""
};

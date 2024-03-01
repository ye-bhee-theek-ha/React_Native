import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';
import InputBox from '../InputBox/InputBox.js';
import { TextInput } from 'react-native';

const InputBoxWithNum = ({
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
      <View style={styles.inputAreaNum}>
        <TextInput
          inputStyle = {[styles.areaCode]}
          value="+92"
        />
        <View style={styles.seperator}>

        </View>
        <TextInput
          inputStyle = {[styles.InputBox, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default InputBoxWithNum;

InputBoxWithNum.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  inputStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  placeholder: PropTypes.string,
  header: PropTypes.string,
};

InputBoxWithNum.defaultProps = {
  value: "",
  inputStyle: {},
  headerStyle: {},
  placeholder: "",
  header: ""
};



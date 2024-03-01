import React from 'react';
import {View, Text, Touchable} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';
import RememberMe from '../RememberMe/RememberMe.js';

const InputFeildFooter = ({
  isChecked,
  setisChecked,
  footerStyle,
  resetPass,
}) => {
  // Component logic here
  return (
    <View style={styles.container}>
      <RememberMe
        style= {styles.rememberme}
        isChecked= {isChecked}
        setSelection= {setisChecked}
      />
      <Text 
        style= {styles.forgot}
        onPress={resetPass}
      >
        Forgot Password
      </Text>
    </View>
  );
}

export default InputFeildFooter;

InputFeildFooter.propTypes = {
  isChecked: PropTypes.bool,
  setisChecked: PropTypes.func,
  resetPass: PropTypes.func
};

InputFeildFooter.defaultProps = {
  isChecked: false,
  setisChecked: () => null,
  resetPass: () => null
};

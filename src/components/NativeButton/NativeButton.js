// NativeButton.js
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import PropTypes from 'prop-types';

import styles from './NativeButtonStyles';
import { AppIcons } from '../../libs';

const NativeButton = ({
  icon_name,
  onPress,
  title,
  containerStyle,
  titleStyle,
  disabled,
}) => {
  const dispay_logo = ({icon_name}) => {
    if (icon_name == "github")
    {
      return (
        <View style= {styles.icon_container}>
          <AppIcons.github size={24}
            styles= {styles.icon}
          />
        </View>
      )
    }
    else if (icon_name == "gitlab")
    {
      return (
        <View style= {styles.icon_container}>
          <AppIcons.gitlab size={24}
            style= {styles.icon}
          />
        </View>
      )
    }
    return (null)
  }

  return (
    <TouchableOpacity
      style= {[styles.button, containerStyle]}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}>
        {dispay_logo({icon_name})}
      <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NativeButton;

NativeButton.propTypes = {
  icon_name: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
};

// Define default values
NativeButton.defaultProps = {
  icon_name: "",
  disabled: false,
  titleStyle: {},
  containerStyle: {},
};

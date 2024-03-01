import React, { useState } from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';
import NativeButton from '../NativeButton/NativeButton.js';
import Seperator from '../seperator/seperator.js';

const SubmitArea = ({
  title,
  onPress,
  containerStyle,
  seperatortxt,

}) => {
  // Component logic here
  const OnPress_github = () => {
    console.log("github");
  }
  const OnPress_gitlabs = () => {
    console.log("gitlabs");
  }

  return (
    <View style= {[styles.container, containerStyle]}>
      <NativeButton
        title={title}
        containerStyle={styles.Button_outer}
        titleStyle={styles.Button_txt}
        onPress={onPress}
      />
      <Seperator
        text={seperatortxt}
      />
      <View style= {styles.container_bottom}>
        <NativeButton 
          containerStyle = {styles.OrWithBtns}
          titleStyle={styles.OrWithBtns_txt}
          Show_logo = {true}
          icon_name="gitlab"
          title='gitlab'
          onPress={OnPress_gitlabs}
        />
        <View
          style= {styles.OrWithBtns_seperator}
        />
        <NativeButton 
          containerStyle = {styles.OrWithBtns}
          titleStyle={styles.OrWithBtns_txt}
          Show_logo = {true}
          icon_name="github"
          title='github'
          onPress={OnPress_github}
        />
      </View>

    </View>
  );
}

export default SubmitArea;

SubmitArea.propTypes = {
  title: PropTypes.string.isRequired,
  seperatortxt: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
};

SubmitArea.defaultProps = {
  onPress: () => null,
  containerStyle: {},
  seperatortxt: "or with"

};

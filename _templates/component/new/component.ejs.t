---
to: src/components/<%= name %>/<%= name %>.js
unless_exists: true
---
import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './Style.js';

const <%= Name %> = ({}) => {
  // Component logic here
  return (
    <View>
      <Text><%= Name %></Text>
    </View>
  );
}

export default <%= Name %>;

<%= Name %>.propTypes = {};

<%= Name %>.defaultProps = {};

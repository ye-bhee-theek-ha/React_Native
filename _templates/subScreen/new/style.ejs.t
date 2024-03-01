---
to: src/screens/<%= folder %>/<%= name %>/Style.js
unless_exists: true
---
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
});

export default styles;

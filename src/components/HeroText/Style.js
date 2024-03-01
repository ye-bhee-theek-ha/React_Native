import {StyleSheet} from 'react-native';
import { Theme } from '../../libs';

const styles = StyleSheet.create({
    heading: {
        fontSize: Theme.typography.heading.fontSize,
        color: Theme.colors.black
    },
    subheading: {
        fontSize: Theme.typography.body.fontSize,
        marginLeft: 5
    }
});

export default styles;

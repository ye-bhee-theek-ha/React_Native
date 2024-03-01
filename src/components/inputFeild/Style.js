import {StyleSheet} from 'react-native';
import { Theme, Responsive } from '../../libs';

const {getWidth, getHeight} = Responsive;


const styles = StyleSheet.create({
    Container: {
        marginTop: getHeight(2)
    },
    HeaderTxt: {
        color: Theme.colors.purple,
        fontSize: Theme.typography.body.fontSize,
        fontWeight: Theme.typography.heading.fontWeight

    },
    InputBox: {
        borderColor: Theme.colors.grey,
        borderWidth: Theme.borders.width,
    },
});

export default styles;

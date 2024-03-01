import {StyleSheet} from 'react-native';
import { Responsive, Theme } from '../../libs';

const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
    input: {
        width: getWidth(79),
        height: getHeight(5),
        marginStart: getWidth(1),
        marginTop: getHeight(1),
        paddingStart: getWidth(3),
        justifyContent:"center",
        borderRadius:Theme.borders.normalRadius,
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.grey,
        fontSize: Theme.typography.body.fontSize
    }
});

export default styles;

import {StyleSheet} from 'react-native';
import { Theme, Responsive } from '../../libs';


const {getWidth, getHeight} = Responsive;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: getHeight(3),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    info_txt: {
        fontSize: Theme.typography.body.fontSize,
        color: Theme.colors.darkTransparent
    },
    btn_txt: {
        fontSize: Theme.typography.body.fontSize,
        color: Theme.colors.purple,
        paddingHorizontal: getWidth(2)
    }
});

export default styles;

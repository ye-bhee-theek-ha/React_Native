import {StyleSheet} from 'react-native';
import { Theme, Responsive } from '../../libs';


const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
    container: {
        marginVertical: getHeight(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Theme.colors.darkTransparent
    },
    text: {
        textAlign: 'center',
        color: Theme.colors.darkTransparent,
        paddingHorizontal: getWidth(3),
        fontWeight: Theme.typography.btn.fontWeight,
        fontSize: Theme.typography.body.fontSize,
        paddingBottom: 3
    }
});

export default styles;

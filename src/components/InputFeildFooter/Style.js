import {StyleSheet} from 'react-native';
import { Theme, Responsive } from '../../libs';

const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
    container: {
        marginTop: getWidth(2),
        flexDirection: "row",
    },
    rememberme: {
        width: getWidth(50),
        fontSize: Theme.typography.body.fontSize,
        color: Theme.colors.black,
        alignSelf: "flex-start"
    },
    forgot:{
        fontSize: Theme.typography.body.fontSize,
        color: Theme.colors.error,
        alignSelf: "flex-end"
    }
});

export default styles;

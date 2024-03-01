import {StyleSheet} from 'react-native';
import { Responsive, Theme } from '../../libs';

const {getWidth, getHeight} = Responsive;

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        marginTop: getHeight(5)
    },
    Button_outer: {
        height: getHeight(6),
        backgroundColor: Theme.colors.purple,
        justifyContent: "center",
        borderRadius: Theme.borders.fullRadius
        
    },
    Button_txt: {
        fontSize: Theme.typography.btn.fontSize,
        fontWeight: Theme.typography.btn.fontWeight,
        fontFamily: Theme.typography.btn.fontFamily
    },
    container_bottom: {
        flexDirection: "row",
    },
    OrWithBtns: {
        flex: 1,
        height: getHeight(6),
        flexDirection: "row",
        backgroundColor: Theme.colors.white,
        borderWidth: Theme.borders.width,
        
    },
    OrWithBtns_seperator: {
        width: getWidth(4)
    },
    OrWithBtns_txt: {
        color: Theme.colors.black,
        fontSize: Theme.typography.body.fontSize,
        fontWeight: Theme.typography.btn.fontWeight,
    }
});

export default styles;

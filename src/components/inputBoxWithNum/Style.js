import {StyleSheet} from 'react-native';
import { Responsive, Theme } from '../../libs';

const {getWidth, getHeight} = Responsive;


const styles = StyleSheet.create({
    Container: {
        marginTop: getHeight(2)
    },
    areaCode: {
        justifyContent: "center",
        alignSelf: "center",
    },
    InputBox: {
        borderWidth: 0,
        maxWidth: getWidth(70),
        marginStart: 0,
        marginTop: 0,
        paddingStart:0,
        borderRadius: 0,
    },
    seperator: {
        width: 0,
        borderRightWidth: 1,
        borderColor: Theme.colors.darkTransparent,
        marginHorizontal: getWidth(2),
        height: getHeight(3),
        alignSelf:"center"
    },
    inputAreaNum: {
        flexDirection: "row",
        width: getWidth(79),
        height: getHeight(5),
        marginStart: getWidth(1),
        marginTop: getHeight(1),
        paddingStart: getWidth(3),
        alignContent: "center",
        borderRadius:Theme.borders.normalRadius,
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.grey,
        fontSize: Theme.typography.body.fontSize
    },
    HeaderTxt: {
        color: Theme.colors.purple,
        fontSize: Theme.typography.body.fontSize,
        fontWeight: Theme.typography.heading.fontWeight

    },

});

export default styles;

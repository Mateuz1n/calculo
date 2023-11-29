import { StyleSheet } from "react-native";
import { MyColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnBlue:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },

    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.dark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },

    btnlight:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.light,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },

    btnGray:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.gray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },

    smalltextlight:{
        fontSize: 32,
        color: MyColors.white,
    },
    
    smalltextdark:{
        fontSize: 32,
        color: MyColors.black,
    },
    //keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },

    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },

    screenFirstNumber:{
        fontSize: 96,
        color: MyColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end"
    },

    screenSecondNumber:{
        fontSize: 40,
        color: MyColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end"
    },

});
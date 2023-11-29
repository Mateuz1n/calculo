import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../style/GlobalStyles";
import { ThemeContext } from "../context/ThemeContext";

interface ButtomProps{
    onPress: () => void;
    title: string;
    Isblue?: boolean;
    Isgray?: boolean
}

export default function Button ({title, onPress, Isblue, Isgray}: ButtomProps) {
    const theme = useContext(ThemeContext);
    return(
        <TouchableOpacity
            style={
                Isblue
                ? Styles.btnBlue
                : Isgray
                ? Styles.btnGray
                : theme === "light"
                ? Styles.btnlight
                : Styles.btnDark
            }
            onPress={onPress}>
                <text
                    style={
                        Isblue || Isgray
                        ? Styles.smalltextlight
                        : theme === "dark"
                        ? Styles.smalltextlight
                        : Styles.smalltextdark
                    }
                >
                    {title}
                </text>
            </TouchableOpacity>
    );

}
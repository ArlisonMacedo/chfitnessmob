
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    menuTop: {
        flexDirection: 'row',
        height: 100,
        marginTop: 10,
        justifyContent: 'space-evenly',
    },
    menuTopButton: {
        backgroundColor: '#DBE611',
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#00b37e',
        borderWidth: 0.2
    },
    menuTopText: {
        color: '#000',
        fontFamily: 'Nunito_900Black',
        fontSize: 12,
        // fontWeight: 'bold'
    },
})
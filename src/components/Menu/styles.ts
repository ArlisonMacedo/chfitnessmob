
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    menuTop: {
        flexDirection: 'row',
        height: 100,
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    menuTopButton: {
        backgroundColor: '#29292E',
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#00b37e',
        borderWidth: 0.2
    },
    menuTopText: {
        color: '#00b37e',
        fontFamily: 'Roboto_700Bold',
        fontSize: 12
    },
})
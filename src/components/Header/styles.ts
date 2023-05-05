import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29292e',
        height: 110,
        width: '100%'
    },
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    title: {
        color: '#c4c4cc',
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
        paddingHorizontal: 10
    }
})
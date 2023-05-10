import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A3F53',
        flex: 1
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    profile: {
        marginVertical: 22
    },
    userName: {
        color: '#FBEF55',
        fontFamily: 'Nunito_700Bold',
        fontSize: 30,
    },
    userWhatsapp: {
        color: '#FBEF55',
        fontFamily: 'Nunito_700Bold',
        fontSize: 22,
    },
    pushing: {
        marginTop: 20,
        borderColor: '#FBEF55',
        borderWidth: 0.5,
        width: '100%',
        padding: 10,
        borderRadius: 5
    },
    dayAssin: {
        fontFamily: 'Nunito_700Bold',
        color: '#c4c4cc',
        fontSize: 18
    },
    dayVen: {
        fontFamily: 'Nunito_700Bold',
        color: '#c4c4cc',
        fontSize: 18
    },
    countDay: {
        fontFamily: 'Nunito_700Bold',
        color: '#c4c4cc',
        fontSize: 18
    }
})
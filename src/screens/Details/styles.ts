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
        // borderColor: '#FBEF55',
        // borderWidth: 0.5,
        width: '100%',
        padding: 10,
        borderRadius: 5,
        gap: 10
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
    },
    statusV: {
        backgroundColor: 'green',
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5
    },
    statusX: {
        backgroundColor: 'red',
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5
    },
    statusText: {
        color: '#c4c4cc',
        fontFamily: 'Nunito_700Bold'
    },
    footer: {
        position: 'absolute',
        bottom: '-50%',
        width: '100%'
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        rowGap: 2
    },
    buttonCallWhatsapp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#53e151',
        width: '45%',
        height: 40,
        borderRadius: 8
    },
    buttonCallWhatsappText: {
        color: '#000',
        fontFamily: 'Nunito_900Black'
    },
    buttonCallRenew: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4cc',
        width: '45%',
        height: 40,
        borderRadius: 8
    },
    buttonCallRenewText: {
        color: '#000',
        fontFamily: 'Nunito_900Black'
    }
})
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
    },
    modelView: {
        // flex: 1,
        backgroundColor: '#005361',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '90%',
        height: '40%',
        bottom: '20%',
        left: '5%',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 10,
        shadowRadius: 8,
        elevation: 60,
    },
    modelContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    inputText: {
        fontFamily: 'Nunito_900Black',
        fontSize: 22,
        color: '#FBEF55'
    },
    inputModal: {
        width: '22%',
        // borderWidth: 1,
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 8,
        height: 40,
        paddingLeft: 17,
        color: '#000',
        fontFamily: 'Nunito_700Bold',
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center'

    },
    modalButton: {
        backgroundColor: '#FBEF55',
        width: 100,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    modalButtonText: {
        fontFamily: 'Nunito_900Black',
        fontSize: 17
    }
})
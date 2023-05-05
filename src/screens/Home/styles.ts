import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214',
        alignItems: 'center',
        padding: 30
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topText: {
        color: '#e1e1e6',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold',
        lineHeight: 160,
        paddingHorizontal: 10
    },
    subTitle: {
        color: '#c4c4cc',
        fontFamily: 'Roboto_400Regular'
    },
    logoImg: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginVertical: 10
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    textContent: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_700Bold'
    },
    input: {
        backgroundColor: '#202024',
        width: 300,
        height: 55,
        borderRadius: 8,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        paddingHorizontal: 8,
        color: '#c4c4cc',
        marginVertical: 10
    },
    footer: {
        position: 'absolute',
        bottom: 30
    },
    button: {
        backgroundColor: '#00b37e',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    textButton: {
        color: '#fff',
        fontFamily: 'Roboto_700Bold'
    }
})
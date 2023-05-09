import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C494F',
        alignItems: 'center',
        padding: 30
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        lineHeight: 160,
        paddingHorizontal: 10
    },
    subTitle: {
        color: '#fff',
        fontFamily: 'Nunito_400Regular'
    },
    logoImg: {
        width: 140,
        height: 140,
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
        fontFamily: 'Nunito_700Bold'
    },
    input: {
        backgroundColor: '#fff',
        width: 300,
        height: 55,
        borderRadius: 8,
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
        paddingHorizontal: 8,
        color: '#000',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DBE611',
        width: 300,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10
    },
    textButton: {
        color: '#000',
        fontFamily: 'Nunito_900Black',
        fontSize: 18
    },
    footerInitText: {
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        fontSize: 18
    },
    footerSecoText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 30,
        color: '#fff'
    },
    footerThirText: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
        color: '#fff'
    }
})
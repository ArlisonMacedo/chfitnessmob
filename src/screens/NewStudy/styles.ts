import { StyleSheet } from "react-native/"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A3F53'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.9
    },
    title: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 22,
        color: '#fff'
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
        // height: 70
    },
    label: {
        color: '#FBEF55',
        fontFamily: 'Nunito_700Bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    inputText: {
        height: 50,
        backgroundColor: '#FFF',
        marginBottom: 20,
        width: '70%',
        borderRadius: 5,
        fontFamily: 'Nunito_400Regular',
        paddingHorizontal: 10
    },
    button: {
        width: '70%',
        height: 50,
        backgroundColor: '#FBEF55',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#000',
        fontFamily: 'Nunito_700Bold',
        fontSize: 17
    }
})
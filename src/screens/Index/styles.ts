import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A3F53',
        // alignItems: 'center',
    },
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
        fontFamily: 'Nunito_700Bold',
        fontSize: 12
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25
    },
    contentText: {
        color: '#fff',
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        alignSelf: 'flex-start'

    },
    cellButton: {
        // backgroundColor: '#DBE611',
        width: '110%',
        height: 100,
        borderRadius: 8,
        marginVertical: 10,
        padding: 5,
        borderWidth: 0.4,
        borderColor: '#FBEF55',
        justifyContent: 'center',
        paddingLeft: 10
    },
    cellButtonName: {
        color: '#FBEF55',
        fontFamily: 'Nunito_700Bold',
        fontSize: 22,
        paddingVertical: 5,
    },
    cellButtonDate: {
        fontSize: 12,
        fontFamily: 'Nunito_400Regular',
        color: '#fff'
    },
    cellButtonCountDays: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 12,
        color: '#fff'
    }
})
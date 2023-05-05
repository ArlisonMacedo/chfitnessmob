import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214',
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
        fontFamily: 'Roboto_700Bold',
        fontSize: 12
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25
    },
    contentText: {
        color: '#c4c4cc',
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,

    },
    cellButton: {
        backgroundColor: '#323238',
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginVertical: 10,
        padding: 5,

        justifyContent: 'center',
        paddingLeft: 10
    },
    cellButtonName: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        fontSize: 22,
        paddingVertical: 5,

    },
    cellButtonDate: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: '#c4c4cc'
    },
    cellButtonCountDays: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#c4c4cc'
    }
})
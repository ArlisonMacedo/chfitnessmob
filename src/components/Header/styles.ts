import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C494F',
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
    iniTitle: {
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        marginHorizontal: 12
    },
    title: {
        color: '#DBE611',
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        // paddingHorizontal: 10
    }
})
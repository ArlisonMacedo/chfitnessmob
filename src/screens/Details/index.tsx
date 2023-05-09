import { View } from "react-native";
import Header from "../../components/Header";
import { useEffect } from "react";


import { styles } from "./styles";

export default function Details() {

    useEffect(() => { }, [])
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}
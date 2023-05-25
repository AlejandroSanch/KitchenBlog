import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Image, NativeBaseProvider } from "native-base";


const Profile = () =>{
    return (
        <NativeBaseProvider >
            <View style={styles.container}>
                <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"
                 }} alt="Alternate Text" size={"xl"}
                style={styles.image} />
                <Text style={styles.title}>(Nombre de Usuario)</Text>
             </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize :20,
        fontWeight:"bold",
        margin: 20,
    },
    image: {
        width: 200,
        aspectRatio: 1,
        borderRadius: 200,
    }
})
export default Profile;
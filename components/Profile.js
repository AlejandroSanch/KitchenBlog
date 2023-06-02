import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import List from "../components/List";
import pins from "../assets/data/pins";
import { ScrollView } from "react-native-gesture-handler";


const Profile = () =>{
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"
                 }} alt="Alternate Text" size={"xl"}
                style={styles.image} />
                <Text style={styles.title}>Sinchi Gutierrez</Text>
                <Text style={styles.subtitle}>Publicaciones</Text>
            </View>
            <List pins={pins}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    title: {
        fontSize :20,
        fontWeight:"bold",
        margin: 15,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 500,
        textAlign: "center"
    },
    image: {
        marginVertical: 10,
        width: 150,
        aspectRatio: 1,
        borderRadius: 200, 
    },
    header: {
        alignItems: "center"
    }
})
export default Profile;
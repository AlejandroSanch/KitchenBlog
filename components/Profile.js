import React from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import List from "../components/List";
import pins from "../assets/data/pins";
import { ScrollView } from "react-native-gesture-handler";
import {Entypo, Feather} from "@expo/vector-icons";
import { useSignOut } from "@nhost/react";


const Profile = () =>{

    const {signOut} = useSignOut();


    return (
        <ScrollView style={styles.container}>
            <View>
                <Pressable onPress={signOut}>
                    <Feather name="share" size={24} color="black" style={styles.icons}/>
                </Pressable>
            </View>
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
    },
    icons: {
        flexDirection: "row",
         alignSelf: "flex-end",
        padding: 10,
    }
})
export default Profile;
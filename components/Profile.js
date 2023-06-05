import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import List from "../components/List";
import pins from "../assets/data/pins";
import { ScrollView } from "react-native-gesture-handler";
import {Entypo, Feather} from "@expo/vector-icons";
import { useNhostClient, useSignOut, useUserId } from "@nhost/react";
import { Alert } from "react-native";


const GET_USER_QUERY=`
query MyQuery ($id: uuid!) {
    user(id: $id) {
      avatarUrl
      displayName
      id
      users_pins {
        id
        image
        ingredients
        preparation
        title
      }
    }
  }
  `;
  

const Profile = () =>{
    const [user, setUser]= useState();
    const {signOut} = useSignOut();
    const nhost = useNhostClient();
    const userId = useUserId();

    const fetchUserData = async() =>{
        const result = await nhost.graphql.request(GET_USER_QUERY, {id: userId});
        Alert.alert(result);
        if(result.error){
            Alert.alert("error fetching user");
        }else{
            setUser(result.data.user);
        }
    }

    useEffect(()=>{
        fetchUserData();
    },[]);

    return (
        <ScrollView style={styles.container}>
            <View>
                <Pressable onPress={signOut}>
                    <Feather name="share" size={24} color="black" style={styles.icons}/>
                </Pressable>
            </View>
            <View style={styles.header}>
                <Image source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                 }} alt="Alternate Text" size={"xl"}
                style={styles.image} />
                <Text style={styles.title}>{user}</Text>
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
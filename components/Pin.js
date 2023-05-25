import {Text, View, Image, StyleSheet, Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { useState } from "react";

const [ratio, setRatio] = useState(1);


const onLike = () =>{};

function Pin(){
    return(
    <View styles={styles.pin}>
        <View>
             <Image source={{uri:"https://wallpaperaccess.com/full/317501.jpg"
            }}alt="Alternate Text"size="xs" style={[styles.image, {aspectRatio: ratio}]}/>
            <Pressable onPress={onLike} style={styles.heartBtn}>
                <AntDesign name="hearto" size={16} color="black"/>
            </Pressable>
        </View>
        <Text style={styles.title}>Texto</Text>
    </View>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize :20,
        fontWeight:"bold",
        margin: 10,
    },
    image: {
        width: "100%",
        borderRadius: 25,
        
    },
    pin: {
        width: "100%",
    },
    heartBtn:{
        backgroundColor: "#D3CFD4",
        position: "absolute",
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,

    }
});

export default Pin;
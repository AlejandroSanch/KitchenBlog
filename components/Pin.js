import { useState, React, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {Text, View, Image, StyleSheet, Pressable, ActivityIndicator} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { NhostClient, useNhostClient } from "@nhost/react";

const Pin = (props) => {

  const navigation = useNavigation();
  const nhost = useNhostClient();
  const {id, image, title} =props.pin;
  const [imageUri, setImageUri]=useState("");
  const [ratio, setRatio] = useState(1);

  const fetchImage =async () => {
    const result = await nhost.storage.getPresignedUrl({
        fileId: image 
     });
     setImageUri(result.presignedUrl.url);
     console.log(result);
  }

  useEffect(() =>{
    fetchImage();
    },[image]);
  
  useEffect(() =>{
    if(imageUri){
        Image.getSize(imageUri, (width, height) => setRatio(width/height));
    }},[imageUri])

  const onLike = () => {};

  const goToPinPage = () => {
    navigation.navigate("ContentPub", {id});
  };

  if(!imageUri){
    return <ActivityIndicator/>
  }

    return(
    <Pressable onPress= {goToPinPage} style={styles.pin}>
        <View>
             <Image source={{uri: imageUri
            }}alt="Alternate Text"size="xs" style={[styles.image, {aspectRatio: ratio}]}/>
            <View>
            <Pressable onPress={onLike} style={styles.heartBtn}>
                <AntDesign name="hearto" size={16} color="black"/>
            </Pressable>
            </View>
        </View>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </Pressable>
    );
};



const styles = StyleSheet.create({
    title: {
        fontSize :16,
        lineHeight: 22,
        fontWeight:"600",
        margin: 5,
        color: "#181818",
    },
    image: {
        width: "100%",
        borderRadius: 5,
        
    },
    pin: {
        width: "100%",
        padding: 4,
    },
    heartBtn:{
        backgroundColor: "#D3CFD4",
        position: "absolute",
        bottom: 5,
        right: 5,
        padding: 5,
        borderRadius: 50,

    }
});

export default Pin;
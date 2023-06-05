import React, { useState } from 'react';
import { Button, Image, View, ScrollView, StyleSheet, Platform, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import { TextArea, Box, NativeBaseProvider, useNativeBase } from 'native-base';
import { useNhostClient } from '@nhost/react';
import { useNavigation } from '@react-navigation/native';

const CREATE_PIN_MUTATION = `mutation MyMutation ($image: String!, $title: String!, $ingredients: String!, $preparation: String!) {
  insert_pins(objects: {image: $image, title: $title, ingredients: $ingredients, preparation: $preparation}) {
    returning {
      created_at
      id
      image
      ingredients
      preparation
      title
    }
  }
}`;

export default function AddingPost() {
  const [imageUri, setImageUri] = useState(null);
  const [title, setTitle] =useState("");
  const [ingredients, setIngredients] =useState("");
  const [preparation, setPreparation] =useState("");

  const nhost = useNhostClient();
  const navigation = useNavigation();

  const uploadFile = async () => {

    if(!imageUri){
      return{
        error:{ 
          message: "no image selected",
        },
      }
    }

    const uri = Platform.OS === "ios" ? imageUri.replace("file://",""): imageUri;

    const result = await nhost.storage.upload({
     file: {
      name: "123.png",
      type: "image/png",
      uri,
     }, 
    });
    return result;

  }


  const onSubmit= async () => {

     const UploadResult = await uploadFile();

     if (UploadResult?.error){
        Alert.alert("error uploading image", UploadResult.error.message)
        return;
     }

    const result = await nhost.graphql.request(CREATE_PIN_MUTATION,{
      title,
      image: UploadResult.fileMetadata.id,
      ingredients,
      preparation,
    })

    console.log(result);
    if(result.error){
      console.log("error creating the post");
    }else{
      navigation.goBack();
    } 

  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  return (
    <NativeBaseProvider>
        <ScrollView>
            <View style={styles.root}>
                <Button title="Subir una Foto" onPress={pickImage} />
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>}
                <TextInput placeholder='Titulo de la Receta' value={title} onChangeText={setTitle} style={styles.input}/>
                <Box alignItems="center" w="100%">
                    <TextArea h={20} style={styles.input} placeholder="Ingredientes" value={ingredients} onChangeText={setIngredients}  />
                </Box>
                <Box alignItems="center" w="100%">
                    <TextArea h={20} style={styles.input} placeholder="Preparacion" value={preparation} onChangeText={setPreparation}  />
                </Box>
                <Button  title="Subir Publicacion" onPress={onSubmit} />
            </View>
        </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1,
        marginVertical: 10,
        borderRadius: 10,
        
    },
    input: {
        borderWidth:1,
        borderColor: "gainsboro",
        padding: 10,
        width: "100%",
        textAlign: "justify"

    },
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
})

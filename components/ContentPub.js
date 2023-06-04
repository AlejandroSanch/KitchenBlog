
{/*PinScreen*/}
import {View, Text, StyleSheet, Image} from 'react-native';

import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNhostClient } from '@nhost/react';


const ContentPub = () => {

    const [ratio, setRatio] = useState(1);
    const [pin, setPin] = useState(null);

    const nhost = useNhostClient();
    const route = useRoute();

    const GET_PIN_QUERY = `
    query MyQuery ($id: uuid!)
    {
        pins_by_pk(id: $id) 
        {
            image
            title
            ingredients
            preparation
            created_at
            id
            user 
            {
                displayName
                id
                avatarUrl
            }
        }
    }
`

    const pinId = route.params?.id;

    const fetchPin = async (pinId) => {
        const response = await nhost.graphql.request(GET_PIN_QUERY,{id: pinId});
        if(response.error){
            Alert.alert("Error fetching the pin");
        }else{
            setPin(response.data.pins_by_pk);
        }
    }

    useEffect(() =>{
        fetchPin(pinId);
    }, [pinId]);

    useEffect(() =>{
        if(pin?.image){
            Image.getSize(pin?.image, (width, height) => setRatio(width/height));
        }},[pin])

    if (!pin){
        return <Text>Pin not found</Text>
    }

    return(
            <ScrollView>
                <View style={styles.root}>
                    <Image source ={{uri: pin.image}} style={[styles.image, {aspectRatio: ratio}]}/>
                    <Text style={styles.title}>{pin.title}</Text>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                    <Text style={styles.content}>{pin.ingredients}</Text>
                    <Text style={styles.subtitle}>preparacion</Text>
                    <Text style={styles.content}>{pin.preparation}</Text>
                </View>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
    root:{
        height: "100%",
        backgroundColor: "white",
    },
    image: {
        width: "100%",
        borderRadius: 20,
    
    },
    title:{
        margin: 10,
        fontSize: 24,
        fontWeight: 600,
        textAlign: "center",
    },
    subtitle:{
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
    },
    content:{
        padding: 15,
        fontSize: 15,
        textAlign: "justify",
        lineHeight: 20,

    },
});

export default ContentPub;

{/*PinScreen*/}
import {View, Text, StyleSheet, Image} from 'react-native';
import pins from '../assets/data/pins';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';



const ContentPub = () => {

    const pin = pins[1];

    const [ratio, setRatio] = useState(1);

    useEffect(() =>{
        if(pin.image){
            Image.getSize(pin.image, (width, height) => setRatio(width/height));
        }},[pin])

    return(
            <ScrollView>
                <View style={styles.root}>
                    <Image source ={{uri: pin.image}} style={[styles.image, {aspectRatio: ratio}]}/>
                    <Text style={styles.title}>{pin.title}</Text>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    <Text style={styles.content}>{pin.ingredients}</Text>
                    <Text style={styles.subtitle}>content</Text>
                    <Text style={styles.content}>{pin.content}</Text>
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
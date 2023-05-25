import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import Pin from "../components/Pin";

const Home = () =>{
    return (
    <ScrollView>
        <View styles={styles.container}>
         <Pin/>
         <Pin/>
        </View>
    </ScrollView>
    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    
});


export default Home;
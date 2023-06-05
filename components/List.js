import React from "react";
import {View, ScrollView, StyleSheet} from "react-native";

import Pin from "../components/Pin";

const numRows = 2;

const List = ({pins}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                {Array.from(Array(numRows)).map((_, colIndex) =>(
                    <View style={styles.column} key={`column_${colIndex}`}>
                        {pins.filter((_,index)=> index % numRows === colIndex).map(pin => 
                        <Pin pin={pin} key={pin.id}/>)}
                </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
    },
    column: {
        flex: 1,
    },
    
});

export default List;

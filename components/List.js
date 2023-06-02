import React from "react";
import {View, ScrollView, StyleSheet} from "react-native";

import Pin from "../components/Pin";

const List = ({pins}) => {
    return(
        <ScrollView>
        {/* 1st column */}
            <View style={styles.container}>
               <View style={styles.column}>
                    {pins.filter((_,index)=> index % 2 === 0).map(pin => <Pin pin={pin} key={pin.id}/>)}
               </View>
        {/*2nd column*/}
               <View style={styles.column}>
               {pins.filter((_,index)=> index % 2 === 1).map(pin => <Pin pin={pin} key={pin.id}/>)}
               </View>
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

import React, { Component } from "react";
import { View, Text,TouchableOpacity, StyleSheet} from "react-native";

const ComponentScreen = ({navigation})=> {
    return (

    <View>
        <Text>
            hello ComponentsScreen screen
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Setting")}>
            <Text>
                press here
            </Text>
        </TouchableOpacity>
    </View>  
);
}

export default ComponentScreen
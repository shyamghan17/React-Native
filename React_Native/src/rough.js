import React, { useState } from "react";
import { View, Text, ActivityIndicatorBase, StyleSheet } from "react-native";

const Rough = () => {

  return (
    <View style={styles.container}>
    
    <ActivityIndicatorBase size="large"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Rough;
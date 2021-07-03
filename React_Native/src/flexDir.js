import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, } from 'react-native'
import { useState } from 'react'

const DirectionLayout = () => {
    const [ direction, setDierction] = useState("ltr")

    return(
<PreviewLayout

            label="direction"
            selectedValue={direction}
            values={["ltr", "rtl"]}
            setSelectedValue={setDierction}
            >
            <View style={[styles.box, {backgroundColor:"powderblue"}]}
            
            ></View>
            <View style={[styles.box, {backgroundColor:"skyblue"}]}
            
            ></View>
            <View style = {[styles.box, {backgroundColor:"steelblue"}]}
            
            ></View>
</PreviewLayout>

    )
}

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
}) => (
    <View style= {{ padding:10, flex:1}}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
             {values.map((value) => (
             <TouchableOpacity
              key = {value}
        onPress= {() => setSelectedValue(value)}

        style={[
            styles.button,
         selectedValue === value && styles.selected
         ]}
         >
         <Text
          style={[
              styles.buttonLabel,
               selectedValue == value && styles.selectedLabel
               ]}
               >
                   {value}
                   </Text>

         </TouchableOpacity>
         ))}
         </View>
        <View style={[styles.container, {[label]: selectedValue}]}>
            {children}
        </View>
    </View>
    )


const styles = StyleSheet.create ({
    container:{
        flex:1,
        marginTop:8,
        backgroundColor:"aliceblue"
    },
    box:{
        width:50,
        height:50
    },
    row:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    button:{
        paddingHorizontal:8,
        paddingVertical:6,
        borderRadius:4,
        backgroundColor:"oldlace",
        alignSelf:"flex-start",
        marginHorizontal:"1%",
        marginBottom:6,
        minWidth:"48%",
        textAlign:"center"
    },
    buttonLabel:{
        fontSize:12,
        fontWeight:"500",
        color:"coral"
    },
    selected:{
        backgroundColor:"coral",
        borderWidth:0,
    },
    selectedLabel:{
        color:"white"
    },

    label:{
        textAlign:"center",
        marginBottom:10,
        fontSize:24,
    }
})

 export default DirectionLayout
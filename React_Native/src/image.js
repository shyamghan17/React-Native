import React from 'react'
import {Text,View, Font, TextInput,Image} from 'react-native'
import Cat from './fundamental'

const Imag =() => {

    return (
       <View>
           
           <Image source={{uri: "https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"}}
           style={{width:200, height:200}}
           
           />
           <Text>hello im ramgopal</Text>
           <Cat></Cat>
       </View>
    )
}

export default Imag
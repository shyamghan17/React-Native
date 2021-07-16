import React, { useState } from 'react';
import { Button, View, Text, Modal } from 'react-native';

const Hello =() => {
 const [ modelOpen, setModelOpen] = useState(false)
  return(

    <View>

      
      <Modal
      visible={modelOpen} animationType='slide'
      >
   <View><Text>Its time to work form home</Text>
   <Button title="close " onPress={() => setModelOpen(false)}/>

</View>   

      </Modal>
      <Button title="about us " onPress={() => setModelOpen(true)}/>




      <Text>Helo</Text>
    </View>
  )
}

export default Hello;


import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation}) {
  const [count, setCount] = React.useState(0)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:()=> <TouchableOpacity
      onPress={()=> setCount((c) => c+1)} >

        <Text>Update Count</Text>
       
       </TouchableOpacity>
    })
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>count:{count}</Text>
      
    </View>
  );
}

function DetailScreen({navigation, route}) {

  const { itemId, otherParam} = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>

      <Text>{JSON.stringify(itemId)}</Text>
      <Text>{JSON.stringify(otherParam)}</Text>

      <Button 
        title='go to details... again' 
        onPress={()=>
          navigation.push('Detail', {
          itemId: Math.floor(Math.random() * 100),
      })
      }
      />

      <Button   title="Go to Home" onPress={()=> navigation.navigate('Home')}/>
      <Button   title="Go Back" onPress={()=> navigation.goBack()}/>
      <Button   title="Update the title" onPress={() => navigation.setOptions({ title: 'Updated!' })} />

    </View>
  );
}


function LogoTitle () {
  return(
    <Image
    source={require('./src/38.png')}
    style ={{height:50, width:50}}
    />
  )
}
const Stack = createNativeStackNavigator();

function App() {
  return (
             <NavigationContainer>
          <Stack.Navigator
          initialRouteName="Home"
         
          >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation, route}) =>({

              headerTitle: (props) => <LogoTitle {...props} />,
              headerStyle:{
                backgroundColor:'#f4511e'}
              
            })}
            />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={({ route }) => ({ title: route.params.name }),{
              headerStyle: {
                backgroundColor: '#f4511e'},
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }
          }
             />
  
        </Stack.Navigator>
        </NavigationContainer>
      
  );
}

export default App;
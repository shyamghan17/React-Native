import React , {useState}from 'react'
import { Text, View, Stylesheet, Button } from 'react-native'

const Cat  =(props) => {
    const [isHungry, setIsHungry] = useState(true)


    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? "Hungry" : "Full"}!</Text>
            <Button 
            onPress={()=> { setIsHungry(false)}}
            disabled= {!isHungry}
            title = {isHungry ? "Pour some milk, Please!" : "Thank you!"}
            />
        </View>
    )
    }

    const Cafe = () => {
        return (
            <>
             <Cat name = "thomas" /> 
             <Cat name = " Ranjan"/>
             <Cat name = " Nikhil"/>
            </>
        )
    }

    export default Cafe

import React from 'react';
import 'react-native-gesture-handler';
import AppNavContainer from './src/navigation/index';
import GlobalProvider from './src/context/reducers/Providers';

const App =()=>{
  return (

    <GlobalProvider>
         <AppNavContainer/>

    </GlobalProvider>
  );
};


export default App;

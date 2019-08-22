import React, {Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from './src/header/Header';
import ListDetails from './src/ListDetails/ListDetails';


const App = () => {
  return (
    <View>
      <Header headerText = {'Inbox'}/>
      <Text />
          <ScrollView>
              <ListDetails ListDetails = {'Events and information'} />
              <ListDetails ListDetails = {'Employees retirement'} />
              <ListDetails ListDetails = {'Performance and Resources'} />
              <ListDetails ListDetails = {'Employees retirement'} />
              <ListDetails ListDetails = {'Performance and Resources'} />
              <ListDetails ListDetails = {'DAWN Exibition'} />
              <ListDetails ListDetails = {'The Technical side of Token'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
              <ListDetails ListDetails = {'Events and information'} />
              <ListDetails ListDetails = {'Employees retirement'} />
              <ListDetails ListDetails = {'Performance and Resources'} />
              <ListDetails ListDetails = {'Employees retirement'} />
              <ListDetails ListDetails = {'Performance and Resources'} />
              <ListDetails ListDetails = {'DAWN Exibition'} />
              <ListDetails ListDetails = {'The Technical side of Token'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
              <ListDetails ListDetails = {'Correction of a Quotation'} />
             
           </ScrollView>
    </View>
  )
};



export default App;

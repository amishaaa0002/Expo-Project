import * as React from 'react';
import { Button ,View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function HomePage() {

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title='Product List'
        onPress={() => navigation.navigate('list')}
        />
      </View>
    );
  };
  
  export default HomePage;



import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { router, useRouter } from 'expo-router'; // Add this import statement
import { Header } from '@/components/Header';

export default function Home() {
  const cats = require('../../../assets/cats.jpg');
  const dogs = require('../../../assets/dogs.jpg');

  const router = useRouter(); // Add this line to use the router

  function handleSelectPet(type: string) {
    router.navigate("/details/" + type);
  }

  return (   
    <View className="flex-1 p-8 bg-black ">
      <Header
        title="Pets Age"
        subtitle="Descubra a idade real do seu pet."
      />
      <Text  className='text-4xl mb-5 color-white' >Selecione o seu pet.</Text>
      <ScrollView horizontal>
        <TouchableOpacity onPress={() => handleSelectPet('cats')}>
          <View >
            <Image source={cats} style={{ width: 300, height: 200 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectPet('dogs')}>
        <View>  
            <Image source={dogs} style={{ width: 300, height: 200 }} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

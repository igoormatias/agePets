import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useLocalSearchParams } from 'expo-router';
import { calculateCanineAge, calculateFelineAge } from '@/utils';
import { dogType } from '@/constants';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

interface FormData {
  age: string;
  weight: string;
}

export default function PetDetails() {
  const { control, handleSubmit } = useForm<FormData>();
  const [petAge, setPetAge] = React.useState<number>(0);
  const params = useLocalSearchParams<{ type: string }>();

  const petType = params?.type === dogType ? 'cachorro' : 'gato'

  const onSubmit = (data: FormData) => {
    Keyboard.dismiss()
    const { age, weight } = data;
    const realAge =
      params?.type === dogType
        ? calculateCanineAge(parseInt(age, 10), parseFloat(weight) )
        : calculateFelineAge( parseInt(age, 10), parseFloat(weight));

    setPetAge(realAge);
    console.warn('weight', weight);
  };


  return (
    <View className="flex-1 p-8 bg-black ">
    <Header
      title="Pets Age"
      subtitle={`Descubra a idade real do seu ${petType}.`}  
      
    />
      <Text className='text-2xl mb-5 color-white' >Digite a Idade e o peso</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
         <Input
            placeholder="Idade"
            id='age'
            value={value}   
            onChangeText={onChange}
            keyboardType="numeric"
            className='p-4 border border-gray-400 rounded mb-5 color-white'
          />
        )}
        name="age"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
          id="weight"
          value={value}
          placeholder="Peso"
          keyboardType="numeric"      
          onChangeText={onChange}
          className='p-4 border border-gray-400 rounded mb-5 color-white'           
          />
        )}
        name="weight"
        defaultValue=""
      />
       {petAge > 0 && <Text className='text-2xl mb-5 color-white items-center justify-center mt-5  '> O seu {petType} tem { petAge} anos.</Text>}

      <Button className="mt-155"  title="Verificar" onPress={handleSubmit(onSubmit)}  />
     
     
    </View>
  );
}
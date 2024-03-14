import { Header } from "@/components/Header";
import { PetImage } from "@/components/PetImage";
import { pets } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  function handleSelectPet(type: string) {
    router.navigate("/details/" + type);
  }

  return (
    <View className="flex-1 p-8 bg-black ">
      <Header title="Pets Age" subtitle="Descubra a idade real do seu pet." />
      <Text className="text-4xl mb-5 color-white">Selecione o seu pet.</Text>
      <ScrollView horizontal>
        {pets.map((pet) => (
          <TouchableOpacity
            key={pet.type}
            onPress={() => handleSelectPet(pet.type)}
          >
            <View className="flex items-center justify-center bg-slate-800 rounded mr-2">
              <PetImage petType={pet.type} />
              <Text className="text-4xl mb-5 font-semiBold color-white">
                {pet.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

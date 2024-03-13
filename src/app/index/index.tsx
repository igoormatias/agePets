import { Header } from "@/components/Header";
import { useRouter } from "expo-router";
import { Cat, Dog } from "lucide-react-native";
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
        <TouchableOpacity onPress={() => handleSelectPet("cats")}>
          <View className="flex items-center justify-center bg-slate-800 rounded mr-2">
            <Cat color="white" height={200} width={300} />
            <Text className="text-4xl mb-5 font-semiBold color-white">Gato</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectPet("dogs")}>
        <View className="flex items-center justify-center bg-slate-800 rounded">
            <Dog color="white" height={200} width={300} />
            <Text className="text-4xl mb-5 font-semiBold color-white">Cachorro</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

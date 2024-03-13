import React from "react";
import { View, Text, Keyboard, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useLocalSearchParams } from "expo-router";
import { calculateCanineAge, calculateFelineAge } from "@/utils";
import { dogType } from "@/constants";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  age: string;
  weight: string;
}

export default function PetDetails() {
  const { control, handleSubmit } = useForm<FormData>();
  const [petAge, setPetAge] = React.useState<number>(0);
  const params = useLocalSearchParams<{ type: string }>();

  const navigation = useNavigation();

  const petType = params?.type === dogType ? "cachorro" : "gato";
  const petAgeText = petType === "cachorro" ? "canina" : "felina";

  const onSubmit = (data: FormData) => {
    Keyboard.dismiss();
    const { age, weight } = data;

    if (!age || !weight) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha a idade e o peso."
      );
      return;
    }

    const realAge =
      params?.type === dogType
        ? calculateCanineAge(parseInt(age, 10), parseFloat(weight))
        : calculateFelineAge(parseInt(age, 10), parseFloat(weight));

    setPetAge(realAge);
  };

  const hangleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 p-8 bg-black ">
      <Header
        title="Pets Age"
        subtitle={`Descubra a idade ${petAgeText} do seu ${petType}.`}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text className="text-2xl mb-5 color-white">Idade:</Text>
            <Input
              placeholder="Idade"
              id="age"
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
              maxLength={2}
              className="p-4 border border-gray-400 rounded mb-5 color-white"
            />
          </View>
        )}
        name="age"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text className="text-2xl mb-5 color-white">Peso:</Text>
            <Input
              id="weight"
              value={value}
              placeholder="Peso"
              keyboardType="numeric"
              onChangeText={onChange}
              maxLength={3}
              className="p-4 border border-gray-400 rounded mb-5 color-white"
            />
          </View>
        )}
        name="weight"
        defaultValue=""
      />
      {petAge > 0 && (
        <Text className="text-2xl mb-5 color-white items-center justify-center mt-5  ">
          {" "}
          O seu {petType} tem {petAge} anos.
        </Text>
      )}
      <View className="flex gap-8 mt-20">
        <Button
          type="primary"
          title="Verificar"
          onPress={handleSubmit(onSubmit)}
        />
        <Button title="Voltar" onPress={hangleGoBack} />
      </View>
    </View>
  );
}

import { PawPrint } from "lucide-react-native"
import { Text, View } from "react-native"

type Props = {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: Props) {
  return (
    <View className="w-full mt-14 mb-12 bg-slate-900 p-3 rounded"> 
      <View className="flex-row items-center gap-4">
        <PawPrint fill="white"  color="white" size={32} />
      <Text className="text-white font-bold text-4xl">{title}</Text>
      </View>
     
      <Text className="text-white font-semibold mt-2 text-lg">{subtitle}</Text>
    </View>
  )
}
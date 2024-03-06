import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"


type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity  activeOpacity={0.7} {...rest}>   
    <View     
    className="h-12 w-full bg-blue-500  color-white items-center justify-center rounded-sm"   
    
  >
   
      <Text className="text-white text-lg font-semiBold uppercase">
        {title}
      </Text>
    </View>
    </TouchableOpacity>
  )
} 
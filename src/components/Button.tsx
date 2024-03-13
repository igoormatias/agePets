import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"


interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: "primary" | "secondary"
}

export function Button({ title,type, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity  activeOpacity={0.7} {...rest}>   
    <View     
    className={`h-12 w-full ${type === "primary" ? "bg-blue-500" : "bg-gray-400"} color-white items-center justify-center rounded-sm`  } 
    
  >
   
      <Text className="text-white text-lg font-semiBold uppercase">
        {title}
      </Text>
    </View>
    </TouchableOpacity>
  )
} 
import { catType, dogType } from "@/constants";
import { Cat, Dog } from "lucide-react-native";


interface PetImageProps {
    petType: string
}
export function PetImage({ petType }: PetImageProps) {
    switch (petType) {
        case catType:
            return <Cat color="white" height={200} width={300} />;
        case dogType:
            return <Dog color="white" height={200} width={300} />;
    }
}
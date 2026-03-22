import { View, Text } from "react-native";
import { Award, Crown, Heart } from "lucide-react-native";

export default function ProfileStats() {
  return (
    <View className="flex-row justify-between">
      <View className="w-[31%] bg-light-secondary dark:bg-dark-secondary rounded-[20px] p-4 items-center">
        <Award color="white" />
        <Text className="text-white text-xl font-bold">24</Text>
        <Text className="text-white/90 text-xs">Songs</Text>
      </View>

      <View className="w-[31%] bg-light-primary dark:bg-dark-primary rounded-[20px] p-4 items-center">
        <Crown color="white" />
        <Text className="text-white text-xl font-bold">98%</Text>
        <Text className="text-white/90 text-xs">Score</Text>
      </View>

      <View className="w-[31%] bg-light-accent dark:bg-dark-accent rounded-[20px] p-4 items-center">
        <Heart color="white" />
        <Text className="text-white text-xl font-bold">156</Text>
        <Text className="text-white/90 text-xs">Fans</Text>
      </View>
    </View>
  );
}

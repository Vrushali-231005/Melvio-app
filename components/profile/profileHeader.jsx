import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Music, Crown } from "lucide-react-native";

export default function ProfileHeader() {
  return (
    <LinearGradient
      colors={["#edaa8a", "#ea9178", "rgba(244,226,209,0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="pt-14 pb-28 px-6"
    >
      <View className="flex-row justify-between items-center">
        <View>
          <View className="flex-row items-center gap-2 mb-1">
            <Crown size={16} color="white" />
            <Text className="text-white/90 text-sm">Premium Profile</Text>
          </View>

          <Text className="text-white text-3xl font-bold">Melvio</Text>
        </View>

        <View className="w-14 h-14 bg-[#b16a59] rounded-full items-center justify-center">
          <Music size={26} color="white" />
        </View>
      </View>
    </LinearGradient>
  );
}

import { View, Text, Image } from "react-native";
import { Mic } from "lucide-react-native";

export default function ProfileCard() {
  return (
    <View className="bg-light-bg dark:bg-dark-card rounded-[28px] p-6 shadow-xl items-center">
      <View className="relative">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1656582117510-3a177bf866c3",
          }}
          className="w-32 h-32 rounded-full"
        />

        <View className="absolute -bottom-2 -right-2 w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-full items-center justify-center border-4 border-light-bg dark:border-dark-card">
          <Mic color="white" size={20} />
        </View>
      </View>

      <Text className="text-2xl font-bold text-light-primary dark:text-dark-primary mt-4">
        Alex Johnson
      </Text>

      <Text className="text-light-primary/80 dark:text-dark-primary/80 text-sm">
        🎵 Vocal Artist • Music Lover
      </Text>
    </View>
  );
}

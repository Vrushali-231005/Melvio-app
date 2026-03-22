import { View, Text, Image } from "react-native";
import { Sparkles } from "lucide-react-native";

export function GreetingCard() {
  return (
    <View
      className="relative rounded-[28px] p-6 overflow-hidden bg-light-card dark:bg-dark-card"
    >
      {/* Decorative circles */}
      <View className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
      <View className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <View className="flex-row items-center gap-2 mb-2">
            <Sparkles color="white" size={18} />
            <Text className="text-white/90 font-quicksand-500">
              Good Afternoon
            </Text>
          </View>

          <Text className="text-white text-3xl font-quicksand-700 mb-1">
            Hey Vrushali!🎤
          </Text>

          <Text className="text-white/90 text-base font-quicksand-500">
            Ready to create magic?
          </Text>
        </View>

        <View
          className="w-20 h-20 rounded-full overflow-hidden ml-4 border-4 border-white/30"
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1732550216149-41c470c95e53",
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

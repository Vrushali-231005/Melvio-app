import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Music } from "lucide-react-native";

export default function GradientHeader({ title = "Welcome back !!" }) {
  return (
    <LinearGradient
      colors={["#edaa8a", "rgba(244,226,209,0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="pt-12 pb-8 px-6"
    >
      <View className="flex-row items-center justify-between mb-6 mt-6">
        <View>
          <Text className="font-quicksand-700 text-white/80 font-bold text-md mb-1">
            {title}
          </Text>

          <View className="flex-row items-center ">
            <Text
              className="text-3xl font-bold"
              style={{
                color: "#ff9a76",
              }}
            >
              M
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: "#ff8a65",
              }}
            >
              e
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: "#ff7f50",
              }}
            >
              l
            </Text>
            <Text
              className="text-3xl font-bold ml-1"
              style={{
                color: "#ff6b6b",
              }}
            >
              v
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: "#ffa07a",
              }}
            >
              i
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: "#ffb88c",
              }}
            >
              o
            </Text>
          </View>
        </View>

        <View
          className="w-14 h-14 rounded-full items-center justify-center shadow-lg"
          style={{ backgroundColor: "#b16a59" }}
        >
          <Music size={28} color="white" />
        </View>
      </View>
    </LinearGradient>
  );
}

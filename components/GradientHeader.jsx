import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Music } from "lucide-react-native";
import { useTheme } from "./theme/ThemeContext";

export default function GradientHeader({ title = "Welcome back !!" }) {
  const { theme } = useTheme();
  return (
    <LinearGradient
      colors={[theme.card, `${theme.bg}00`]}
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
                color: theme.secondary,
              }}
            >
              M
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: theme.secondary,
              }}
            >
              e
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: theme.secondary,
              }}
            >
              l
            </Text>
            <Text
              className="text-3xl font-bold ml-1"
              style={{
                color: theme.accent,
              }}
            >
              v
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: theme.accent,
              }}
            >
              i
            </Text>
            <Text
              className="text-3xl font-bold"
              style={{
                color: theme.accent,
              }}
            >
              o
            </Text>
          </View>
        </View>

        <View
          className="w-14 h-14 rounded-full items-center justify-center shadow-lg bg-light-primary dark:bg-dark-primary"
        >
          <Music size={28} color="white" />
        </View>
      </View>
    </LinearGradient>
  );
}

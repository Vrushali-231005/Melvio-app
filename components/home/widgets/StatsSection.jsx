import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Music, Trophy, Flame } from "lucide-react-native";
import { useTheme } from "../../theme/ThemeContext";

const statsData = [
  {
    label: "Songs Sung",
    value: "24",
    emoji: "🎤",
    icon: Music,
    colorKey: "secondary",
  },
  {
    label: "Best Score",
    value: "98%",
    emoji: "🏆",
    icon: Trophy,
    colorKey: "card",
  },
  {
    label: "Day Streak",
    value: "7",
    emoji: "🔥",
    icon: Flame,
    colorKey: "primary",
  },
];

export function StatsSection() {
  const { theme } = useTheme();

  return (
    <View className="pb-4">
      {/* Title */}
      <View className="flex-row items-center mb-4 px-1">
        <Text className="mr-2">💫</Text>
        <Text className="text-lg font-quicksand-700 text-light-primary dark:text-dark-primary">
          Your Journey
        </Text>
      </View>

      {/* Cards */}
      <View className="flex-row justify-between">
        {statsData.map((stat, index) => {
          const color = theme[stat.colorKey];
          return (
            <LinearGradient
              key={index}
              colors={[color, `${color}dd`]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="w-[31%] p-4 items-center relative overflow-hidden rounded-2xl"
            >
              {/* Faded emoji */}
              <Text className="absolute top-1 right-1 text-2xl opacity-20">
                {stat.emoji}
              </Text>

              {/* Main emoji */}
              <Text className="text-3xl mb-1">{stat.emoji}</Text>

              {/* Value */}
              <Text className="text-white text-xl font-quicksand-700">
                {stat.value}
              </Text>

              {/* Label */}
              <Text className="text-white/90 text-xs text-center font-quicksand">
                {stat.label}
              </Text>
            </LinearGradient>
          );
        })}
      </View>
    </View>
  );
}

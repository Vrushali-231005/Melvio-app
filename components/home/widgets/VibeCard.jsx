import { View, Text } from "react-native";
import { Quote } from "lucide-react-native";
import { useTheme } from "../../theme/ThemeContext";

export function VibeCard() {
  const { isDark } = useTheme();
  return (
    <View
      className="relative rounded-[28px] p-6 border-2 overflow-hidden bg-light-card/30 dark:bg-dark-card/30 border-light-card/40 dark:border-dark-card/40"
    >
      <View className="absolute top-4 right-4 opacity-10">
        <Quote size={80} className="text-light-primary dark:text-dark-primary" />
      </View>

      <View>
        <Text
          className="font-quicksand-700 text-md uppercase mb-3 text-light-primary dark:text-dark-primary"
          style={{ letterSpacing: 2 }}
        >
          Today's Vibe
        </Text>

        <Text
          className="font-quicksand-500 text-xl leading-relaxed text-light-primary dark:text-dark-primary"
        >
          "Sing like nobody is listening, love like you've never been hurt,
          dance like nobody's watching."
        </Text>
      </View>
    </View>
  );
}

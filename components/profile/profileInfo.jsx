import { View, Text } from "react-native";
import { Mail, Cake, Calendar } from "lucide-react-native";

export default function ProfileInfo() {
  return (
    <View className="gap-3">
      {/* Email */}
      <View
        className="rounded-[20px] p-4 shadow-lg bg-light-bg/95 dark:bg-dark-card/95 border border-light-card/30 dark:border-dark-card/30"
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-11 h-11 rounded-full items-center justify-center shadow-md bg-light-secondary dark:bg-dark-secondary"
          >
            <Mail size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text
              className="text-xs mb-0.5 text-light-primary/70 dark:text-dark-primary/70"
            >
              Email Address
            </Text>
            <Text
              className="font-semibold text-sm text-light-primary dark:text-dark-primary"
            >
              alex.johnson@melvio.com
            </Text>
          </View>
        </View>
      </View>

      {/* Age */}
      <View
        className="rounded-[20px] p-4 shadow-lg bg-light-bg/95 dark:bg-dark-card/95 border border-light-card/30 dark:border-dark-card/30"
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-11 h-11 rounded-full items-center justify-center shadow-md bg-light-primary dark:bg-dark-primary"
          >
            <Cake size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text
              className="text-xs mb-0.5 text-light-primary/70 dark:text-dark-primary/70"
            >
              Age
            </Text>
            <Text
              className="font-semibold text-sm text-light-primary dark:text-dark-primary"
            >
              22 years old
            </Text>
          </View>
        </View>
      </View>

      {/* Date Joined */}
      <View
        className="rounded-[20px] p-4 shadow-lg bg-light-bg/95 dark:bg-dark-card/95 border border-light-card/30 dark:border-dark-card/30"
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-11 h-11 rounded-full items-center justify-center shadow-md bg-light-accent dark:bg-dark-accent"
          >
            <Calendar size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text
              className="text-xs mb-0.5 text-light-primary/70 dark:text-dark-primary/70"
            >
              Member Since
            </Text>
            <Text
              className="font-semibold text-sm text-light-primary dark:text-dark-primary"
            >
              January 15, 2026
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

import { View, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Music } from "lucide-react-native";

import { GreetingCard } from "./widgets/GreetingCard";
import { VibeCard } from "./widgets/VibeCard";
import { TrendingSong } from "./widgets/TrendingSong";
import { BackgroundEmoji } from "../BackgroundEmoji";
import { MoodPicker } from "./widgets/MoodPicker";
import { UniqueFeatures } from "./widgets/UniqueFeatures";
import { StatsSection } from "./widgets/StatsSection";
import { BottomNav } from "../BottomNavigation";
import GradientHeader from "../GradientHeader";
import { useAppTheme } from "../theme/useAppTheme";

export default function Home() {
  const  t  = useAppTheme();
  return (
    <View className={`flex-1 items-center justify-center ${t.bg}`}>
      {/* Mobile Container */}
      <View className="flex-1 w-full max-w-[430px] bg-light-bg dark:bg-dark-bg overflow-hidden">
        <BackgroundEmoji />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <GradientHeader />

          {/* Main Content */}
          <View className="px-5 gap-8">
            <GreetingCard />
            <VibeCard />
            <TrendingSong />
            <MoodPicker />
            <UniqueFeatures />
            <StatsSection />
          </View>
        </ScrollView>
        <BottomNav />
      </View>
    </View>
  );
}

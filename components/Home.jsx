import { View, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Music } from "lucide-react-native";

import { GreetingCard } from "./GreetingCard";
import { VibeCard } from "./VibeCard";
import { TrendingSong } from "./TrendingSong";
import { BackgroundEmoji } from "./BackgroundEmoji";
import { MoodPicker } from "./MoodPicker";
import { UniqueFeatures } from "./UniqueFeatures";
import { StatsSection } from "./StatsSection";
import { BottomNav } from "./BottomNavigation";
import GradientHeader from "./GradientHeader";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-[#e8d4c4]">
      {/* Mobile Container */}
      <View className="flex-1 w-full max-w-[430px] bg-[#f4e2d1] overflow-hidden">
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

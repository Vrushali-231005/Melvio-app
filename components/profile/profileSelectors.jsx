import { View, Text, Pressable } from "react-native";
import { ChevronDown } from "lucide-react-native";

const timeImages = {
  morning: "🌅",
  afternoon: "☀️",
  evening: "🌆",
  latenight: "🌙",
};

const timeLabels = {
  morning: "Morning Vibes",
  afternoon: "Afternoon Flow",
  evening: "Evening Chill",
  latenight: "Late Night",
};

const vibeImages = {
  chill: "🎯",
  party: "🎉",
  focus: "�",
  energetic: "🔥",
};

const vibeLabels = {
  chill: "Chill & Sing",
  party: "Party Mode",
  focus: "Focus Flow",
  energetic: "Energetic",
};

export default function ProfileSelectors({ openSheet, selectedValues }) {
  return (
    <View className="flex-row gap-3">
      <Pressable
        onPress={() => openSheet("time")}
        className="flex-1 bg-[#b16a59] rounded-[20px] p-4 items-center"
      >
        <Text className="text-3xl mb-1">
          {timeImages[selectedValues?.time] || timeImages["morning"]}
        </Text>
        <Text className="text-white text-xs">Favorite Time</Text>

        <View className="flex-row items-center gap-1">
          <Text className="text-white font-semibold">
            {timeLabels[selectedValues?.time] || timeLabels["morning"]}
          </Text>
          <ChevronDown color="white" size={14} />
        </View>
      </Pressable>

      <Pressable
        onPress={() => openSheet("vibe")}
        className="flex-1 bg-[#ea9178] rounded-[20px] p-4 items-center"
      >
        <Text className="text-3xl mb-1">
          {vibeImages[selectedValues?.vibe] || vibeImages["chill"]}
        </Text>
        <Text className="text-white text-xs">Vibe Mode</Text>

        <View className="flex-row items-center gap-1">
          <Text className="text-white font-semibold">
            {vibeLabels[selectedValues?.vibe] || vibeLabels["chill"]}
          </Text>
          <ChevronDown color="white" size={14} />
        </View>
      </Pressable>
    </View>
  );
}

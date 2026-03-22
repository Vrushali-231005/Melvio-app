import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Smile } from "lucide-react-native";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "🌙", label: "Chill" },
  { emoji: "🔥", label: "Energetic" },
  { emoji: "💔", label: "Sad" },
];

export function MoodPicker() {
  const [selectedMood, setSelectedMood] = useState("Happy");

  return (
    <View>
      {/* Header */}
      <View className="flex-row items-center gap-2 mb-4 px-1">
        <Smile size={20} className="text-light-primary dark:text-dark-primary" />
        <Text
          className="font-quicksand-700 text-xl text-light-primary dark:text-dark-primary"
        >
          How are you feeling?
        </Text>
      </View>

      {/* Mood Grid */}
      <View className="flex-row flex-wrap justify-between">
        {moods.map((mood, index) => {
          const isSelected = selectedMood === mood.label;

          return (
            <Pressable
              key={index}
              onPress={() => setSelectedMood(mood.label)}
              className={`w-[48%] rounded-[20px] py-5 px-4 mb-3 items-center justify-center ${isSelected ? "bg-light-primary dark:bg-dark-primary" : "bg-light-secondary dark:bg-dark-secondary"}`}
            >
              {/* Emoji */}
              <Text className="text-3xl mb-1">{mood.emoji}</Text>

              {/* Label */}
              <Text
                className={`text-white font-quicksand-500 ${isSelected ? "text-[15px]" : "text-[14px]"}`}
              >
                {mood.label}
              </Text>

              {/* Selected indicator */}
              {isSelected && (
                <View className="absolute bottom-2 w-8 h-1 rounded-full bg-white/50" />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

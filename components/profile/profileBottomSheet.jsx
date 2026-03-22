import { View, Text, Modal, Pressable, ScrollView } from "react-native";
import { Check } from "lucide-react-native";

const timeOptions = [
  { value: "morning", label: "Morning Vibes", icon: "🌅" },
  { value: "afternoon", label: "Afternoon Flow", icon: "☀️" },
  { value: "evening", label: "Evening Chill", icon: "🌆 " },
  { value: "latenight", label: "Late Night", icon: "🌙" },
];

const vibeOptions = [
  { value: "chill", label: "Chill & Sing", icon: "🎯" },
  { value: "party", label: "Party Mode", icon: "🎉" },
  { value: "focus", label: "Focus Flow", icon: "🎧" },
  { value: "energetic", label: "Energetic", icon: "🔥" },
];

export default function ProfileBottomSheet({
  type,
  close,
  onSelect,
  currentValue,
}) {
  if (!type) return null;

  const options = type === "time" ? timeOptions : vibeOptions;
  const title = type === "time" ? "Pick your time" : "Choose your vibe";

  return (
    <Modal transparent animationType="slide">
      <View className="flex-1 justify-end bg-black/40">
        <View className="bg-[#f4e2d1] rounded-t-[30px] p-6">
          <Text className="text-xl font-bold text-[#b16a59] mb-4">{title}</Text>

          <ScrollView showsVerticalScrollIndicator={false} className="max-h-64">
            <View className="gap-3">
              {options.map((option) => (
                <Pressable
                  key={option.value}
                  onPress={() => {
                    onSelect(type, option.value);
                    close();
                  }}
                  className={`p-4 rounded-xl flex-row items-center justify-between ${
                    currentValue === option.value
                      ? "bg-[#ea9178]"
                      : "bg-[#b16a59]/20"
                  }`}
                >
                  <View className="flex-row items-center gap-3">
                    <Text className="text-2xl">{option.icon}</Text>
                    <Text
                      className={`font-semibold ${
                        currentValue === option.value
                          ? "text-white"
                          : "text-[#b16a59]"
                      }`}
                    >
                      {option.label}
                    </Text>
                  </View>
                  {currentValue === option.value && (
                    <Check color="white" size={20} />
                  )}
                </Pressable>
              ))}
            </View>
          </ScrollView>

          <Pressable
            onPress={close}
            className="bg-[#b16a59] p-4 rounded-xl mt-4"
          >
            <Text className="text-white text-center font-semibold">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

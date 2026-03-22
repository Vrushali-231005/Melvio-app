import { View, Text } from "react-native";
import { Quote } from "lucide-react-native";

export function VibeCard() {
  return (
    <View
      className="relative rounded-[28px] p-6 border-2 overflow-hidden"
      style={{
        backgroundColor: "rgba(237,170,138,0.3)",
        borderColor: "rgba(237,170,138,0.4)",
      }}
    >
      <View className="absolute top-4 right-4 opacity-10">
        <Quote size={80} color="#b16a59" />
      </View>

      <View>
        <Text
          className="font-quicksand-700 text-md uppercase mb-3"
          style={{ color: "#b16a59", letterSpacing: 2 }}
        >
          Today's Vibe
        </Text>

        <Text
          className="font-quicksand-500 text-xl leading-relaxed"
          style={{ color: "#b16a59" }}
        >
          "Sing like nobody is listening, love like you've never been hurt,
          dance like nobody's watching."
        </Text>
      </View>
    </View>
  );
}

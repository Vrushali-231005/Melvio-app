import { View, Text } from "react-native";
import { Mail, Cake, Calendar } from "lucide-react-native";

export default function ProfileInfo() {
  return (
    <View className="gap-3">
      {/* Email */}
      <View
        className="rounded-[20px] p-4 shadow-lg"
        style={{
          backgroundColor: "rgba(244, 226, 209, 0.95)",
          borderWidth: 1,
          borderColor: "rgba(237, 170, 138, 0.3)",
        }}
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-11 h-11 rounded-full items-center justify-center shadow-md"
            style={{ backgroundColor: "#ea9178" }}
          >
            <Mail size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text
              className="text-xs mb-0.5"
              style={{ color: "#b16a59", opacity: 0.7 }}
            >
              Email Address
            </Text>
            <Text
              className="font-semibold text-sm"
              style={{ color: "#b16a59" }}
            >
              alex.johnson@melvio.com
            </Text>
          </View>
        </View>
      </View>

      {/* Age */}
      <View
        className="rounded-[20px] p-4 shadow-lg"
        style={{
          backgroundColor: "rgba(244, 226, 209, 0.95)",
          borderWidth: 1,
          borderColor: "rgba(237, 170, 138, 0.3)",
        }}
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-11 h-11 rounded-full items-center justify-center shadow-md"
            style={{ backgroundColor: "#b16a59" }}
          >
            <Cake size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text
              className="text-xs mb-0.5"
              style={{ color: "#b16a59", opacity: 0.7 }}
            >
              Age
            </Text>
            <Text
              className="font-semibold text-sm"
              style={{ color: "#b16a59" }}
            >
              22 years old
            </Text>
          </View>
        </View>
      </View>

      {/* Date Joined */}
      <View
        className="rounded-[20px] p-4 shadow-lg"
        style={{
          backgroundColor: "rgba(244, 226, 209, 0.95)",
          borderWidth: 1,
          borderColor: "rgba(237, 170, 138, 0.3)",
        }}
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-11 h-11 rounded-full items-center justify-center shadow-md"
            style={{ backgroundColor: "#c17a6a" }}
          >
            <Calendar size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text
              className="text-xs mb-0.5"
              style={{ color: "#b16a59", opacity: 0.7 }}
            >
              Member Since
            </Text>
            <Text
              className="font-semibold text-sm"
              style={{ color: "#b16a59" }}
            >
              January 15, 2026
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

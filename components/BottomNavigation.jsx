import { View, Text, Pressable } from "react-native";
import { Home, Wand2, Mic2, Sparkles, User } from "lucide-react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const navItems = [
  { icon: Home, label: "Home", route: "Home" },
  { icon: Wand2, label: "Make", route: "Make" },
  { icon: Mic2, label: "Sing", route: "Sing", isCenter: true },
  { icon: Sparkles, label: "Spotlight", route: "Spotlight" },
  { icon: User, label: "Me", route: "Profile" },
];

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigation = useNavigation();

  return (
    <View
      className="absolute bottom-0 w-full px-3 py-2"
      style={{
        backgroundColor: "rgba(237,170,138,0.95)",
        borderTopWidth: 1,
        borderColor: "rgba(177,106,89,0.2)",
      }}
    >
      <View className="flex-row items-end justify-around relative">
        {/* Left side items */}
        {navItems.slice(0, 2).map((item, index) => {
          const Icon = item.icon;
          const isCenter = item.isCenter;
          const isActive = activeTab === item.label;

          return (
            <Pressable
              key={index}
              onPress={() => {
                setActiveTab(item.label);
                navigation.navigate(item.route);
              }}
              className="items-center"
              style={{ marginRight: index === 1 ? 20 : 0 }}
            >
              {/* Icon container */}
              <View
                className={`items-center justify-center rounded-full shadow-lg ${
                  isCenter ? "w-14 h-14" : "w-10 h-10"
                }`}
                style={{
                  backgroundColor: "#f4e2d1",
                  transform:
                    isActive && !isCenter ? [{ scale: 1.15 }] : [{ scale: 1 }],
                }}
              >
                <Icon
                  size={isCenter ? 24 : 18}
                  color="#ea9178"
                  strokeWidth={isActive || isCenter ? 2.5 : 2}
                />
              </View>

              {/* Label */}
              <Text
                className="text-[10px] mt-1 font-quicksand"
                style={{
                  color: "white",
                  opacity: isActive || isCenter ? 1 : 0.7,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}

        {/* Center item */}
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isCenter = item.isCenter;
          const isActive = activeTab === item.label;

          if (isCenter) {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  setActiveTab(item.label);
                  navigation.navigate(item.route);
                }}
                className="items-center"
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: [{ translateX: -28 }],
                  top: -24,
                }}
              >
                {/* Icon container */}
                <View
                  className={`items-center justify-center rounded-full shadow-lg ${
                    isCenter ? "w-14 h-14" : "w-10 h-10"
                  }`}
                  style={{
                    backgroundColor: "#f4e2d1",
                    transform:
                      isActive && !isCenter
                        ? [{ scale: 1.15 }]
                        : [{ scale: 1 }],
                  }}
                >
                  <Icon
                    size={isCenter ? 24 : 18}
                    color="#ea9178"
                    strokeWidth={isActive || isCenter ? 2.5 : 2}
                  />
                </View>

                {/* Label */}
                <Text
                  className="text-[10px] mt-1 font-quicksand"
                  style={{
                    color: "white",
                    opacity: isActive || isCenter ? 1 : 0.7,
                  }}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          }
        })}

        {/* Right side items */}
        {navItems.slice(3).map((item, index) => {
          const Icon = item.icon;
          const isCenter = item.isCenter;
          const isActive = activeTab === item.label;

          return (
            <Pressable
              key={index + 3}
              onPress={() => {
                setActiveTab(item.label);
                navigation.navigate(item.route);
              }}
              className="items-center"
              style={{ marginLeft: index === 0 ? 20 : 0 }}
            >
              {/* Icon container */}
              <View
                className={`items-center justify-center rounded-full shadow-lg ${
                  isCenter ? "w-14 h-14" : "w-10 h-10"
                }`}
                style={{
                  backgroundColor: "#f4e2d1",
                  transform:
                    isActive && !isCenter ? [{ scale: 1.15 }] : [{ scale: 1 }],
                }}
              >
                <Icon
                  size={isCenter ? 24 : 18}
                  color="#ea9178"
                  strokeWidth={isActive || isCenter ? 2.5 : 2}
                />
              </View>

              {/* Label */}
              <Text
                className="text-[10px] mt-1 font-quicksand"
                style={{
                  color: "white",
                  opacity: isActive || isCenter ? 1 : 0.7,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

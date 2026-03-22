import { View, Text, Pressable } from "react-native";
import { Home, Wand2, Mic2, Sparkles, User } from "lucide-react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./theme/ThemeContext";

const navItems = [
  { icon: Home, label: "Home", route: "Home" },
  { icon: Wand2, label: "Theme", route: "Theme" },
  { icon: Mic2, label: "Sing", route: "Sing", isCenter: true },
  { icon: Sparkles, label: "Spotlight", route: "Spotlight" },
  { icon: User, label: "Me", route: "Profile" },
];

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View
      className="absolute bottom-0 w-full px-3 py-2 bg-light-card/95 dark:bg-dark-card/95 border-t border-light-primary/20 dark:border-dark-primary/20"
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
                } bg-light-bg dark:bg-dark-bg`}
                style={{
                  transform:
                    isActive && !isCenter ? [{ scale: 1.15 }] : [{ scale: 1 }],
                }}
              >
                <Icon
                  size={isCenter ? 24 : 18}
                  color={theme.secondary}
                  strokeWidth={isActive || isCenter ? 2.5 : 2}
                />
              </View>

              {/* Label */}
              <Text
                className="text-[10px] mt-1 font-quicksand text-white"
                style={{
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
                  } bg-light-bg dark:bg-dark-bg`}
                  style={{
                    transform:
                      isActive && !isCenter
                        ? [{ scale: 1.15 }]
                        : [{ scale: 1 }],
                  }}
                >
                  <Icon
                    size={isCenter ? 24 : 18}
                    color={theme.secondary}
                    strokeWidth={isActive || isCenter ? 2.5 : 2}
                  />
                </View>

                {/* Label */}
                <Text
                  className="text-[10px] mt-1 font-quicksand text-white"
                  style={{
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
                } bg-light-bg dark:bg-dark-bg`}
                style={{
                  transform:
                    isActive && !isCenter ? [{ scale: 1.15 }] : [{ scale: 1 }],
                }}
              >
                <Icon
                  size={isCenter ? 24 : 18}
                  color={theme.secondary}
                  strokeWidth={isActive || isCenter ? 2.5 : 2}
                />
              </View>

              {/* Label */}
              <Text
                className="text-[10px] mt-1 font-quicksand text-white"
                style={{
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

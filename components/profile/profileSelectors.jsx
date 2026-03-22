import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";

const themes = {
  peachy: {
    emoji: "🍑",
    label: "Peachy Sunset",
    desc: "Warm and cozy vibes",
    bg: "#F0A882",
    swatches: ["#FAE5D5", "#E8A878", "#C86848"],
    activeOverlay: "#d17a6a",
    disabledBg: "#d8c4bc",
  },
  sky: {
    emoji: "🫧",
    label: "Sky Blue",
    desc: "Peaceful and serene",
    bg: "#A8C8E8",
    swatches: ["#D8EEFF", "#80AACC", "#4878A0"],
    activeOverlay: "#6898c0",
    disabledBg: "#c0ccd8",
  },
};

export default function ProfileSelectors({ openSheet, selectedValues }) {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const { theme: currentTheme, toggleTheme } = useTheme();

  const handleThemeSelect = (theme) => {
  const wasSelected = selectedTheme === theme;
  setSelectedTheme((prev) => (prev === theme ? null : theme));
  
  if (!wasSelected) {
    toggleTheme();
  }
};

  const isPeachySelected = selectedTheme === "peachy";
  const isSkySelected = selectedTheme === "sky";

  return (
    <View className="flex-row gap-3">
      {["peachy", "sky"].map((key) => {
        const themeOption = themes[key];
        const isSelected = selectedTheme === key;
        const isDisabled = selectedTheme !== null && selectedTheme !== key;

        return (
          <TouchableOpacity
            key={key}
            activeOpacity={0.88}
            onPress={() => {
              handleThemeSelect(key);
              toggleTheme();
            }}
            disabled={isDisabled}
            style={{
              flex: 1,
              borderRadius: 24,
              overflow: "hidden",
              opacity: isDisabled ? 0.45 : 1,
              backgroundColor: isDisabled
                ? themeOption.disabledBg
                : isSelected
                ? themeOption.activeOverlay
                : themeOption.bg,
              shadowColor: isSelected ? themeOption.bg : "#000",
              shadowOffset: { width: 0, height: isSelected ? 8 : 3 },
              shadowOpacity: isSelected ? 0.45 : 0.1,
              shadowRadius: isSelected ? 16 : 6,
              elevation: isSelected ? 10 : 3,
            }}
          >
            {/* Inner padding */}
            <View className="p-5 items-center">
              {/* Emoji */}
              <Text className="text-5xl mb-2">
                {themeOption.emoji}
              </Text>

              {/* Title */}
              <Text
                className="text-white text-lg font-extrabold mb-1 text-center tracking-wider"
              >
                {themeOption.label}
              </Text>

              {/* Subtitle */}
              <Text
                className="text-white/80 text-xs font-medium text-center mb-4"
              >
                {themeOption.desc}
              </Text>

              {/* Swatches */}
              <View className="flex-row gap-2">
                {themeOption.swatches.map((color, i) => (
                  <View
                    key={i}
                    style={{
                      flex: 1,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: isDisabled ? color + "88" : color,
                    }}
                  />
                ))}
              </View>

              {/* Radio indicator */}
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  borderWidth: 2,
                  borderColor: isDisabled
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(255,255,255,0.9)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 14,
                }}
              >
                {isSelected && (
                  <View
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 6,
                      backgroundColor: isPeachySelected ? "#F0A882" : "#A8C8E8",
                    }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
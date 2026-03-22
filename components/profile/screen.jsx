import { View, ScrollView } from "react-native";
import { useState } from "react";
import { BackgroundEmoji } from "../BackgroundEmoji";
import { BottomNav } from "../BottomNavigation";
import GradientHeader from "../GradientHeader";
import ProfileBottomSheet from "./profileBottomSheet";
import ProfileCard from "./profileCard";
import ProfileInfo from "./profileInfo";
import ProfileSelectors from "./profileSelectors";
import ProfileStats from "./profileStats";

export default function Profile() {
  const [sheetType, setSheetType] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    time: "morning",
    vibe: "chill",
  });

  const handleSelect = (type, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <View className="flex-1 items-center bg-[#e8d4c4]">
      <View className="flex-1 w-full max-w-[430px] bg-[#f4e2d1]">
        <BackgroundEmoji />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <GradientHeader title="My Profile" />

          <View className="px-5 gap-6">
            <ProfileCard />

            <ProfileInfo />

            <ProfileStats />

            <ProfileSelectors
              openSheet={setSheetType}
              selectedValues={selectedValues}
            />
          </View>
        </ScrollView>

        <ProfileBottomSheet
          type={sheetType}
          close={() => setSheetType(null)}
          onSelect={handleSelect}
          currentValue={sheetType ? selectedValues[sheetType] : null}
        />

        <BottomNav />
      </View>
    </View>
  );
}

import { View, Text, Pressable } from "react-native";
import { Music2, Play, TrendingUp } from "lucide-react-native";

const songs = [
  { title: "Blinding Lights", artist: "The Weeknd", plays: "2.1M" },
  { title: "Levitating", artist: "Dua Lipa", plays: "1.8M" },
];

// trending song
export function TrendingSong() {
  return (
    <View>
      <View className="flex-row items-center gap-2 mb-4 px-1">
        <TrendingUp size={20} color="#b16a59" />
        <Text
          className="font-quicksand-700 text-xl"
          style={{ color: "#b16a59" }}
        >
          Trending Now
        </Text>
      </View>

      <View className="gap-3">
        {songs.map((song, index) => (
          <View
            key={index}
            className="rounded-[24px] p-4 flex-row items-center gap-4"
            style={{
              backgroundColor: "#e89a7a",
            }}
          >
            <View
              className="w-14 h-14 rounded-2xl items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
            >
              <Music2 size={26} color="white" />
            </View>

            <View className="flex-1">
              <Text className="text-white font-quicksand-600 text-lg">
                {song.title}
              </Text>

              <Text className="text-white/80 text-md font-quicksand">
                {song.artist}
              </Text>

              <Text className="font-quicksand-500 text-white/60 text-sm mt-1">
                {song.plays} plays
              </Text>
            </View>

            <Pressable
              className="w-11 h-11 rounded-full items-center justify-center"
              style={{ backgroundColor: "#b16a59" }}
            >
              <Play size={18} color="white" fill="white" />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

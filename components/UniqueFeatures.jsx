import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Wand2, Sparkles, ArrowRight } from "lucide-react-native";

export function UniqueFeatures() {
  return (
    <View>
      {/* Header */}
      <View className="mb-4 px-1">
        <Text
          className="text-xl font-quicksand-700 mb-1"
          style={{ color: "#b16a59" }}
        >
          ✨ Discover Magic
        </Text>

        <Text
          className="text-sm font-quicksand opacity-70"
          style={{ color: "#b16a59" }}
        >
          Your creative playground awaits
        </Text>
      </View>

      {/* Features Container */}
      <View className="gap-4">
        {/* AI SONG MAKER */}
        <LinearGradient
          colors={["#ea9178", "#edaa8a"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 24,
            padding: 20,
            overflow: "hidden",
          }}
        >
          <View>
            <View className="flex-row items-center mb-3">
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 8,
                }}
              >
                <Wand2 size={20} color="white" />
              </View>

              <View>
                <Text className="text-white text-lg font-quicksand-700">
                  AI Song Maker
                </Text>

                <Text className="text-white/90 text-xs font-quicksand">
                  Create your vibe 🎵
                </Text>
              </View>
            </View>

            <Text className="text-white/90 text-sm font-quicksand mb-4">
              Generate personalized songs instantly! Just describe your mood and
              let AI create the perfect track for you.
            </Text>

            <Pressable
              style={{
                backgroundColor: "#b16a59",
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-start",
              }}
            >
              <Wand2 size={16} color="white" />

              <Text className="text-white font-quicksand-700 mx-2">
                Make Magic
              </Text>

              <ArrowRight size={16} color="white" />
            </Pressable>
          </View>
        </LinearGradient>

        {/* SPOTLIGHT FEATURE */}
        <LinearGradient
          colors={["#b16a59", "#c17a6a"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 24,
            padding: 20,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1594291714464-252c9da8447a",
            }}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 100,
              height: 100,
              opacity: 0.35,
            }}
          />

          <View>
            <View className="flex-row items-center mb-3">
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 8,
                }}
              >
                <Sparkles size={20} color="white" />
              </View>

              <View>
                <Text className="text-white text-lg font-quicksand-700">
                  Spotlight Judge
                </Text>

                <Text className="text-white/90 text-xs font-quicksand">
                  Get scored by AI 🌟
                </Text>
              </View>
            </View>

            <Text className="text-white/90 text-sm font-quicksand mb-3">
              Perform for virtual judges! Get real-time scores on pitch, rhythm,
              and emotion from our AI panel.
            </Text>

            <View className="flex-row items-center">
              <View className="flex-row">
                <View
                  style={{
                    marginLeft: -6,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>🎭</Text>
                </View>
                <View
                  style={{
                    marginLeft: -6,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>🎪</Text>
                </View>

                <View
                  style={{
                    marginLeft: -6,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>🎨</Text>
                </View>
              </View>

              <Text className="text-white/80 text-xs ml-2 font-quicksand">
                3 AI Judges Ready
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

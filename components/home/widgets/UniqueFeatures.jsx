import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Wand2, Sparkles, ArrowRight } from "lucide-react-native";
import { useTheme } from "../../theme/ThemeContext";

export function UniqueFeatures() {
  const { theme } = useTheme();

  return (
    <View>
      {/* Header */}
      <View className="mb-4 px-1">
        <Text
          className="text-xl font-quicksand-700 mb-1 text-light-primary dark:text-dark-primary"
        >
          ✨ Discover Magic
        </Text>

        <Text
          className="text-sm font-quicksand opacity-70 text-light-primary dark:text-dark-primary"
        >
          Your creative playground awaits
        </Text>
      </View>

      {/* Features Container */}
      <View className="gap-4">
        {/* AI SONG MAKER */}
        <LinearGradient
          colors={[theme.secondary, theme.card]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-2xl p-5 overflow-hidden"
        >
          <View>
            <View className="flex-row items-center mb-3">
              <View
                className="w-10 h-10 rounded-full bg-white/25 items-center justify-center mr-2"
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
              className="bg-light-primary dark:bg-dark-primary py-2 px-4 rounded-full flex-row items-center self-start"
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
          colors={[theme.primary, theme.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-2xl p-5 overflow-hidden"
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1594291714464-252c9da8447a",
            }}
            className="absolute bottom-0 right-0 w-24 h-24 opacity-35"
          />

          <View>
            <View className="flex-row items-center mb-3">
              <View
                className="w-10 h-10 rounded-full bg-white/25 items-center justify-center mr-2"
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
                  className="ml-[-6px] w-8 h-8 rounded-full bg-white/20 items-center justify-center"
                >
                  <Text>🎭</Text>
                </View>
                <View
                  className="ml-[-6px] w-8 h-8 rounded-full bg-white/20 items-center justify-center"
                >
                  <Text>🎪</Text>
                </View>

                <View
                  className="ml-[-6px] w-8 h-8 rounded-full bg-white/20 items-center justify-center"
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

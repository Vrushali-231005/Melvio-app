import { View, Text } from "react-native";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export function BackgroundEmoji() {
  const musicAnim = useRef(new Animated.Value(0)).current;
  const micAnim = useRef(new Animated.Value(0)).current;
  const noteAnim = useRef(new Animated.Value(0)).current;
  const headphoneAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createAnimation = (animatedValue, duration, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animatedValue, {
            toValue: 30,
            duration: duration / 2,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: duration / 2,
            useNativeDriver: true,
          }),
        ]),
      );
    };

    createAnimation(musicAnim, 8000, 0).start();
    createAnimation(micAnim, 10000, 2000).start();
    createAnimation(noteAnim, 9000, 1000).start();
    createAnimation(headphoneAnim, 11000, 3000).start();
  }, []);

  return (
    <View className="absolute inset-0 pointer-events-none">
      <Animated.Text
        className="absolute top-20 left-6 text-4xl opacity-20"
        style={{
          transform: [{ translateY: musicAnim }],
        }}
      >
        🎵
      </Animated.Text>

      <Animated.Text
        className="absolute top-40 right-10 text-4xl opacity-20"
        style={{
          transform: [{ translateY: micAnim }],
        }}
      >
        🎤
      </Animated.Text>

      <Animated.Text
        className="absolute bottom-40 left-10 text-4xl opacity-20"
        style={{
          transform: [{ translateY: noteAnim }],
        }}
      >
        🎶
      </Animated.Text>

      <Animated.Text
        className="absolute bottom-20 right-6 text-4xl opacity-20"
        style={{
          transform: [{ translateY: headphoneAnim }],
        }}
      >
        🎧
      </Animated.Text>
    </View>
  );
}

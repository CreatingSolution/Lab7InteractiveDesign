
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const animationRef = useRef<LottieView>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleToggle = () => {
    // Play forward when starting and backward when stopping.
    animationRef.current?.reset();
    // animationRef.current?.setDirection(isPlaying ? -1 : 1);

    animationRef.current?.play();

    setIsPlaying((previous) => !previous);
  };

  const handleReplay = () => {
    setIsPlaying(false);
    animationRef.current?.reset();
    // animationRef.current?.setDirection(1);
    animationRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Interactive Design</Text>
        <Text style={styles.subtitle}>
          Lab 7 - Lottie Animation
        </Text>

        <View style={styles.animationContainer}>
          <TouchableOpacity
            onPress={handleToggle}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel={
              isPlaying ? "Pause animation" : "Play animation"
            }
          >
            <LottieView
              ref={animationRef}
              source={require("./assets/play-pause.json")}
              autoPlay={false}
              loop={false}
              style={styles.animation}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.status}>
          Status: {isPlaying ? "Playing" : "Paused"}
        </Text>

        <Text style={styles.description}>
          Tap the animated icon to switch between play and pause.
          The transition demonstrates interactive micro-animation
          in a mobile application.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleReplay}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Replay Animation</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          SE5070 - Enterprise Mobility
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    elevation: 4,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#172554",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
  },
  animationContainer: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 8,
  },
  animation: {
    width: 160,
    height: 160,
  },
  status: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2563EB",
    marginTop: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#475569",
    textAlign: "center",
    marginTop: 18,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 28,
  },
});


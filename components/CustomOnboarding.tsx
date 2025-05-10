import Onboarding from "react-native-onboarding-swiper";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from "react-native";
import React, { useState, useRef } from "react";
import CustomButton from "./CustomButton";

const { width } = Dimensions.get("window");

const CustomOnboarding = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const pages = [
    {
      image: require("../assets/images/onboarding1.png"),
      content: (
        <>
          <Text style={styles.title}>
            Help with Everyday <Text style={styles.highlightYellow}>tasks</Text> at
            your fingertips
          </Text>
          <Text style={styles.subtitle}>
            Manage daily tasks, connect with trusted professionals, and take
            control of your life with our app
          </Text>
        </>
      )
    },
    {
      image: require("../assets/images/onboarding2.png"),
      content: (
        <>
          <View style={styles.bulletItem}>
            <Image
              source={require("../assets/images/Tick.png")}
              style={styles.tick}
            />
            <Text style={styles.subtitle}>
              Select the perfect Tasker for your job by reviews, skills, and
              price
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <Image
              source={require("../assets/images/Tick.png")}
              style={styles.tick}
            />
            <Text style={styles.subtitle}>Find handyman close to you</Text>
          </View>
          <View style={styles.bulletItem}>
            <Image
              source={require("../assets/images/Tick.png")}
              style={styles.tick}
            />
            <Text style={styles.subtitle}>Chat with Taskers in real-time Secure payment processing</Text>
          </View>
        </>
      )
    },
    {
      image: require("../assets/images/onboarding3.png"),
      content: (
        <>
          <Text style={styles.title}>
            One App, <Text style={styles.highlight}>INFINITE</Text> {"\n"}
            SOLUTIONS
          </Text>
          <Text style={styles.subtitle}>We&apos;ve got you covered.</Text>
        </>
      )
    }
  ];

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const pageIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentPage(pageIndex);
        }}
      >
        {pages.map((page, index) => (
          <View key={index} style={styles.slide}>
            <Image source={page.image} style={styles.image} />

            <View style={styles.bottomContainer}>
              <View style={styles.textContainer}>{page.content}</View>

              {/* Pagination */}
              <View style={styles.paginationContainer}>
                {pages.map((_, dotIndex) => (
                  <View
                    key={dotIndex}
                    style={[
                      styles.dot,
                      currentPage === dotIndex
                        ? styles.activeDot
                        : styles.inactiveDot
                    ]}
                  />
                ))}
              </View>

              <CustomButton title="Get Started" onPress={null} />
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* Fixed Skip Button */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomOnboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  slide: {
    width: width,
    flex: 1
  },
  image: {
    width: width,
    height: 650,
    resizeMode: "cover",
    position: "absolute",
    bottom: 345
  },
  bottomContainer: {
    backgroundColor: "#006A05",
    paddingHorizontal: 20,
    paddingTop: 21,
    paddingBottom: 94,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%"
  },
  textContainer: {
    marginHorizontal: 15,
    gap: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "700", // Updated font weight to 700
    fontFamily: "Geist"
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 4,
    flexShrink: 1
  },
  highlightYellow: {
    color: "yellow"
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  dot: {
    marginHorizontal: 3
  },
  activeDot: {
    width: 37,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#01C503"
  },
  inactiveDot: {
    width: 13,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "transparent",
    zIndex: 10
  },
  skipText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 20
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4
  },
  tick: {
    width: 16,
    height: 16,
    marginRight: 8
  }
});

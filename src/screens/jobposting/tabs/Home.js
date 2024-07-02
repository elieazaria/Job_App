import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";

import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR, COLORS } from "../../../utils/Colors";
import Welcome from "./Welcome";
import SuggestedJobs from "./SuggestedJobs";
import RecentJobs from "./RecentJobs";
/*
const scrollY = useSharedValue(0);
const scrollHandler = useAnimatedScrollHandler((event) => {
  scrollY.value = event.contentOffset.y;
});
const headerStyle = useAnimatedStyle(() => {
  const backgroundColor = interpolate(
    scrollY.value,
    [0, 100],
    ["#ff6347", "#ffff"],
    Extrapolation.CLAMP
  );
  return { backgroundColor };
});
const statusBarStyle = useAnimatedStyle(() => {
  const barStyle = scrollY.value > 50 ? "dark-content" : "light-content";
  return { barStyle };
});
*/
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Welcome />

      <SuggestedJobs />
      <RecentJobs />
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});

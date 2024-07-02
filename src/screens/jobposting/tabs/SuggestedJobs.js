import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR, COLORS, SIZES } from "../../../utils/Colors";
import JobCardView from "./JobCardView";
import { useNavigation } from "@react-navigation/native";

const SuggestedJobs = () => {
  const navigation = useNavigation();
  const data = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Suggestions</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SuggestedAll");
          }}
        >
          <Text style={styles.headerBtn}>Tout voir</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ marginTop: 1 }}
        data={data}
        horizontal
        renderItem={({ item }) => <JobCardView />}
        contentContainerStyle={{ columnGap: 5 }}
      />
    </View>
  );
};
export default SuggestedJobs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(20),
  },
  headerTitle: {
    fontSize: moderateScale(20),
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: moderateScale(15),
    color: COLORS.gray,
  },
});

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Card,
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
import { useNavigation } from "@react-navigation/native";
import JobRecentsCardView from "./JobRecentsCardView";

const RecentJobs = () => {
  const navigation = useNavigation();
  const data = [1, 2, 3, 4];
  {
    /*
  const data = [
    { id: "1", title: "Card 1", description: "Description of card 1" },
    { id: "2", title: "Card 2", description: "Description of card 2" },
    { id: "3", title: "Card 3", description: "Description of card 3" },
    // Ajoutez d'autres données au besoin
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
*/
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recents</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Tout voir</Text>
        </TouchableOpacity>
      </View>
      {/*
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
  */}
      <FlatList
        style={{ marginHorizontal: 12 }}
        data={data}
        renderItem={({ item }) => <JobRecentsCardView />}
        contentContainerStyle={{ columnGap: 5 }}
      />
    </View>
  );
};
export default RecentJobs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(5),
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

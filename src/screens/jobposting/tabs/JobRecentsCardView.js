import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const JobRecentsCardView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("JobDetails")}
      >
        <View style={styles.image}>
          <Image
            source={require("../../../images/photography.jpg")}
            style={styles.jobImg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.jobTitle}> Photographe</Text>
          <Text style={styles.jobDesc}> Notre prestation</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JobRecentsCardView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 100,
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  jobImg: {
    width: "100%",
    height: 80,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobTitle: {
    fontSize: SIZES.medium,
    //fontFamily:"bold",
    color: COLORS.primary,
  },
  jobDesc: {
    fontSize: SIZES.small + 2,
    // fontFamily:"regular",
    marginTop: 3,
  },
});

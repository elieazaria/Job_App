import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const JobCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("JobDetails")}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../images/photography.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Photographe
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            Notre prestation consiste
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCardView;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 200,
    margin: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
  },
  imageContainer: {
    flex: 1,
    width: 200,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    marginBottom: 2,
  },
});

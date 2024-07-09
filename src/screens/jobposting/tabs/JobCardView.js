import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const JobCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("JobDetails")}>
      <View style={styles.container}>
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
            Nampoina Raz
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCardView;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 240,
    marginEnd: 22,
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    flex: 1,
    width: 230,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    height: "200%",
    width: "200%",
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

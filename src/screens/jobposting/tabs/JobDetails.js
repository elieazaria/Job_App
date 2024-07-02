import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { moderateScale, scale } from "react-native-size-matters";
import { COLORS, SIZES } from "../../../utils/Colors";
import CustomSolidBtn from "../../../common/CustomSolidBtn";
import Ionicons from "@expo/vector-icons/Ionicons";

const JobDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.ImgContainer}>
        <Image
          source={require("../../../images/photography.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}> Photographe</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> Ar 200.000</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.5)</Text>
          </View>
        </View>

        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>Notre prestation comporte.</Text>
        </View>

        <CustomSolidBtn title={"Contacter"} onClick={() => {}} />
      </View>
    </View>
  );
};

export default JobDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  icon: {
    width: scale(16),
    height: scale(16),
    tintColor: "gray",
    marginLeft: moderateScale(10),
  },
  ImgContainer: {
    height: "50%",
    width: "40%",
  },
  image: {
    height: "100%",
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  titleRow: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    Top: 20,
  },
  title: {
    //fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    // fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    Top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    //fontFamily: FONT.medium,
    paddingHorizontal: SIZES.large,
  },
  descriptionWraper: {
    marginTop: SIZES.large,
    marginHorizontal: SIZES.large,
  },
  description: {
    //fontFamily: FONT.medium,
    fontSize: SIZES.large - 2,
  },
  descText: {
    //fontFamily: FONT.regular,
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
});

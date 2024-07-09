import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BG_COLOR, TEXT_COLOR, COLORS, SIZES } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import ProfileOptionItem from "./ProfileOptionItem";

const Profile1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}> Antananarivo</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}> Elie Azaria</Text>
        </View>
      </View>

      <View style={styles.optionArea}>
        <ProfileOptionItem
          icon={require("../../../images/utilisateur.png")}
          title={"Profil"}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require("../../../images/histogramme.png")}
          title={"Statistiques"}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require("../../../images/bookmark.png")}
          title={"Favoris"}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require("../../../images/outils.png")}
          title={"Paramètres"}
          onClick={() => {}}
        />
      </View>
    </View>
  );
};
export default Profile1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  header: {
    width: "100",
    height: "20%",
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: COLORS.secondary,
  },
  user: {
    marginHorizontal: 22,
    marginTop: 25,
  },
  name: {
    fontSize: SIZES.xLarge,
  },

  optionArea: {
    marginTop: moderateVerticalScale(30),
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.xLarge,
  },
  appBar: {
    flexDirection: "row",
    justifyContext: "space-between",
    alignitems: "center",
  },
  location: {
    //fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});

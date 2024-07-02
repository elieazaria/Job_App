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
import { BG_COLOR, TEXT_COLOR, COLORS } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import ProfileOptionItem from "./ProfileOptionItem";

const Profile1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Mon profile </Text>
      </View>
      <View style={styles.optionArea}>
        <ProfileOptionItem
          icon={require("../../../images/trash.png")}
          title={"Favoris"}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require("../../../images/trash.png")}
          title={"Favoris"}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require("../../../images/trash.png")}
          title={"Favoris"}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require("../../../images/trash.png")}
          title={"Favoris"}
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
    marginTop: moderateVerticalScale(25),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: COLORS.primary,
  },
  optionArea: {
    marginTop: moderateVerticalScale(30),
  },
});

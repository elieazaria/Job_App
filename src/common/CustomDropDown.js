import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR } from "../utils/Colors";
import { TextInput } from "react-native-gesture-handler";

const CustomDropDown = ({ title, placeholder, bad, onclick }) => {
  return (
    <TouchableOpacity
      style={[styles.input, { borderColor: bad ? "red" : "#9e9e9e" }]}
      onPress={() => {
        onclick();
      }}
    >
      <Text style={[styles.title, { color: bad ? "red" : "black" }]}>
        {" "}
        {title}
      </Text>
      <Text
        style={{ color: placeholder.includes("Select") ? "#9e9e9e" : "black" }}
      >
        {placeholder}
      </Text>
      <Image source={require("../images/angle-down.png")} style={styles.icon} />
    </TouchableOpacity>
  );
};
export default CustomDropDown;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: verticalScale(42),
    borderWidth: 1,
    alignSelf: "center",
    marginTop: moderateVerticalScale(20),
    borderRadius: moderateScale(10),
    justifyContent: "center",
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-start",
    marginLeft: moderateScale(20),
    top: -moderateVerticalScale(8),
    position: "absolute",
    backgroundColor: BG_COLOR,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  icon: {
    width: scale(10),
    height: scale(10),
  },
});

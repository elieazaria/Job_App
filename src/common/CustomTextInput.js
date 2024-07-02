import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR } from "../utils/Colors";
import { TextInput } from "react-native-gesture-handler";

const CustomTextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  bad,
  keyboard,
}) => {
  return (
    <View style={[styles.input, { borderColor: bad ? "red" : "#9e9e9e" }]}>
      <Text style={[styles.title, { color: bad ? "red" : "black" }]}>
        {" "}
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={(txt) => onChangeText(txt)}
        placeholder={placeholder}
        keyboardType={keyboard ? keyboard : "default"}
      />
    </View>
  );
};
export default CustomTextInput;

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
});

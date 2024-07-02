import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";

const ProfileOptionItem = ({ title, icon, onClick }) => {
  return (
    <TouchableOpacity
      style={{
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marinTop: moderateVerticalScale(20),
      }}
      onPress={() => onClick()}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={icon} style={{ width: scale(50), height: scale(50) }} />
        <Text
          style={{ marginLeft: moderateScale(15), fontSize: moderateScale(18) }}
        >
          {title}
        </Text>
      </View>
      <Image
        source={require("../../../images/angle-right.png")}
        style={{ width: scale(10), height: scale(10) }}
      />
    </TouchableOpacity>
  );
};

export default ProfileOptionItem;

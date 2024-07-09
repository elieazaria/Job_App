import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <View style={{ flexDirection: "row", alignItems: "center", margin: 7 }}>
        <Image source={icon} style={{ width: scale(30), height: scale(30) }} />

        <Text
          style={{ marginLeft: moderateScale(15), fontSize: moderateScale(18) }}
        >
          {title}
        </Text>
      </View>
      <Image
        source={require("../../../images/angle-right.png")}
        style={{ width: scale(20), height: scale(20) }}
      />
    </TouchableOpacity>
  );
};

export default ProfileOptionItem;

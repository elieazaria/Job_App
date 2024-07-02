import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR } from "../utils/Colors";

const Loader = ({ visible }) => {
  return (
    <Modal transparent visible={visible} style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            width: scale(80),
            height: scale(80),
            backgroundColor: BG_COLOR,
            borderRadius: moderateScale(10),
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      </View>
    </Modal>
  );
};
export default Loader;

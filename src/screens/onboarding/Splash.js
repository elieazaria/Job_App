import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { BG_COLOR, TEXT_COLOR } from "../../utils/Colors";
import {
  moderateScale,
  scale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SelectUser");
    }, 3000);
  }, []);
  /*
  const getData = async () => {
    let type = await AsyncStorage.getItem("USER_TYPE");
    if (type != null) {
      if (type == "company") {
        navigation.navigate("DashboardForCompany");
      } else {
        navigation.navigate("SelectUser");
      }
    }
  };
  */
  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/portefeuille.png")}
        style={styles.logo}
      />
      <Text style={styles.name}> Ny Asako </Text>
      <Image
        source={require("../../images/logo ispm.jpg")}
        style={styles.logo}
      />
      <Text style={styles.slogan}> Votre carrière, notre priorité</Text>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BG_COLOR,
  },
  logo: {
    width: scale(100),
    height: verticalScale(100),
  },
  name: {
    fontSize: moderateScale(35),
    fontWeight: "600",
    marginTop: moderateVerticalScale(10),
    color: TEXT_COLOR,
  },
  slogan: {
    fontSize: moderateScale(16),
    fontStyle: "italic",
    position: "absolute",
    bottom: moderateVerticalScale(80),
    fontWeight: "600",
  },
});

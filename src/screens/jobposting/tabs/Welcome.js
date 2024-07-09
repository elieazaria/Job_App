import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import Ionicons, { Feather } from "@expo/vector-icons/Ionicons";
import { COLORS, SIZES, BG_COLOR } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.appBarWrapper}>
        {/*
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> Antananarivo</Text>
        </View>
  */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="Rechercher"
            />

            {/*<View style={styles.searchBtn}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SearchCandidates");
              }}
            >
              <Ionicons
                name="search-outline"
                size={SIZES.xLarge}
                color={COLORS.gray}
              />
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  header: {
    width: "100",
    height: SIZES.xxLarge * 2,
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: COLORS.primary,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
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
  searchContainer: {
    flexDirction: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorzintal: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    //fontFamily:"regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignitems: "center",
    backgroundColor: "red",
  },
});

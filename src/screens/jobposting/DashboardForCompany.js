import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { BG_COLOR, COLORS } from "../../utils/Colors";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import Home from "./tabs/Home";
import MyJobs from "./tabs/MyJobs";
import SearchCandidates from "./tabs/SearchCandidates";
import Profile1 from "./tabs/Profile1";
import Chats from "./tabs/Chats";

const DashBoardForCompany = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <SearchCandidates />
      ) : selectedTab == 2 ? (
        <Chats />
      ) : (
        <Profile1 />
      )}

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selectedTab == 0 ? 3 : 0,
              borderTopColor: COLORS.primary,
            },
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../../images/maison.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 0 ? COLORS.primary : "gray" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selectedTab == 1 ? 3 : 0,
              borderTopColor: COLORS.primary,
            },
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../../images/chercher.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 1 ? COLORS.primary : "gray" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            //setSelectedTab(2)
            navigation.navigate("AddJob");
          }}
        >
          <Image
            source={require("../../images/ajouter.png")}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selectedTab == 2 ? 3 : 0,
              borderTopColor: COLORS.primary,
            },
          ]}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            source={require("../../images/points-de-commentaires.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 2 ? COLORS.primary : "gray" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selectedTab == 3 ? 3 : 0,
              borderTopColor: COLORS.primary,
            },
          ]}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../../images/utilisateur.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 3 ? COLORS.primary : "gray" },
            ]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default DashBoardForCompany;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  bottomView: {
    width: "100%",
    height: verticalScale(70),
    backgroundColor: BG_COLOR,
    shadowColor: "rgba(0,0,0,.5)",
    shadowOpacity: 0.6,
    shadowOffset: { x: 0, y: 1 },
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
  },
});

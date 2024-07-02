import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR, TEXT_COLOR } from "../../../utils/Colors";
//import firestore from "@react-native-firebase/firestore";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const MyJobs = () => {
  /*
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs();
  }, [isFocused]);
  
  const getJobs = async () => {
    let id = await AsyncStorage.getItem("USER_ID");
    firestore()
      .collection("jobs")
      .where("postedBy", "==", id)
      .get()
      .then((data) => {
        let temp = [];
        data.docs.forEach((item) => {
          temp.push({ ...item.data(), id: item.id });
        });
        setJobs(temp);
      });
  };

  const deleteJob = (id) => {
    firestore()
      .collection("jobs")
      .doc(id)
      .delete()
      .then(() => {
        getJobs();
      });
  };
  */
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> FindMyJobs</Text>
    </View>
  );
};
export default MyJobs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  heading: {
    fontSize: moderateScale(25),
    marginLeft: moderateScale(10),
    fontWeight: "600",
    color: TEXT_COLOR,
  },
  jobItem: {
    width: "90%",
    alignSelf: "center",
    marginTop: moderateScale(20),
    backgroundColor: "#f2f2f2",
    borderRadius: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "600",
  },
  desc: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    marginTop: moderateScale(5),
  },
  salary: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    marginTop: moderateScale(5),
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: moderateScale(20),
    alignItems: "center",
    marginTop: moderateScale(15),
  },
  editBtn: {
    width: "40%",
    height: verticalScale(30),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  deleteBtn: {
    width: "40%",
    height: verticalScale(30),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../../../common/CustomTextInput";
import CustomSolidBtn from "../../../common/CustomSolidBtn";
import CustomDropDown from "../../../common/CustomDropDown";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { profiles } from "../../../utils/Profiles";
import { BG_COLOR } from "../../../utils/Colors";
import Loader from "../../../common/Loader";
//import firestore from "@react-native-firebase/firestore";

const EditJob = () => {
  const route = use;
  const [jobTitle, setJobTitle] = useState(route.params.data.jobTitle);
  const [badJobTitle, setBadJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState(route.params.data.jobDesc);
  const [badJobDesc, setBadJobDesc] = useState("");
  const [exp, setExp] = useState(route.params.data.exp);
  const [badExp, setBadExp] = useState("");
  const [salary, setSalary] = useState(route.params.data.salary);
  const [badSalary, setBadSalary] = useState("");
  const [company, setCompany] = useState(route.params.data.company);
  const [badCompany, setBadCompany] = useState("");
  const navigation = useNavigation();
  const [openCategoryModal, setCategoryModal] = useState(false);
  const [openSkillModal, setSkillModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [badJobCategory, setBadJobCategory] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("Select Skill");
  const [badJobSkill, setBadJobSkill] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    profiles.map((item, index) => {
      if (item.category == route.params.data.category) {
        setSelectedCategory(index);
        profiles[index].keywords.map((x, y) => {
          if (x[0] == route.params.data.skill) {
            selectedSkill(x[0]);
          }
        });
      }
    });
  }, []);
  /*
  const postJob = async () => {
    let id = await AsyncStorage.getItems("USER_ID");
    let name = await AsyncStorage.getItems("NAME");

    setLoading(true);
    firestore()
      .collection("jobs")
      .doc(route.params.data.id)
      .update({
        postedBy: id,
        posterName: name,
        jobTitle: jobTitle,
        jobDesc,
        exp,
        salary,
        company,
        skill: selectedSkill,
        category: profiles[selectedCategory].category,
      })
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../../images/cross.png")}
            style={styles.back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Editer</Text>
      </View>

      <CustomTextInput
        value={jobTitle}
        onChangeText={(txt) => {
          setJobTitle(txt);
        }}
        title={"Job title"}
        placeholder={"ex. Web developpemnt"}
        bad={badJobTitle != "" ? true : false}
      />
      {badJobTitle != "" && <Text style={styles.errorMsg}>{badJobTitle}</Text>}
      <CustomTextInput
        value={jobDesc}
        onChangeText={(txt) => {
          setJobDesc(txt);
        }}
        title={"Job Desciption"}
        placeholder={"ex. This is Web developpemnt job"}
        bad={badJobDesc != "" ? true : false}
      />
      {badJobDesc != "" && <Text style={styles.errorMsg}>{badJobDesc}</Text>}
      <CustomDropDown
        value={jobDesc}
        onChangeText={(txt) => {
          setCategoryModal(txt);
        }}
        title={"Category"}
        bad={badJobCategory != "" ? true : false}
        placeholder={
          selectedCategory == "Select Category"
            ? "Select Category"
            : profiles[selectedCategory].category
        }
        onclick={() => {
          setCategoryModal(true);
        }}
      />
      {badJobCategory != "" && (
        <Text style={styles.errorMsg}>{badJobCategory}</Text>
      )}
      <CustomDropDown
        value={jobDesc}
        onChangeText={(txt) => {
          setJobDesc(txt);
        }}
        title={"Skill"}
        bad={badJobSkill != "" ? true : false}
        placeholder={selectedSkill}
        onclick={() => {
          setSkillModal(true);
        }}
      />
      {badJobSkill != "" && <Text style={styles.errorMsg}>{badJobSkill}</Text>}
      <CustomTextInput
        value={exp}
        onChangeText={(txt) => {
          setExp(txt);
        }}
        keyboardType={"number-pad"}
        title={"Experience"}
        placeholder={"ex. required experience 5 years"}
        bad={badExp != "" ? true : false}
      />
      {badExp != "" && <Text style={styles.errorMsg}>{badExp}</Text>}
      <CustomTextInput
        value={salary}
        onChangeText={(txt) => {
          setSalary(txt);
        }}
        keyboardType={"number-pad"}
        title={"Package"}
        placeholder={"ex. 10L"}
        bad={badSalary != "" ? true : false}
      />
      {badSalary != "" && <Text style={styles.errorMsg}>{badSalary}</Text>}
      <CustomTextInput
        value={company}
        onChangeText={(txt) => {
          setCompany(txt);
        }}
        title={"Company"}
        placeholder={"ex. google"}
        bad={badCompany != "" ? true : false}
      />
      {badCompany != "" && <Text style={styles.errorMsg}>{badCompany}</Text>}
      <CustomSolidBtn
        title={"Update Job"}
        onClick={() => {
          if (validate()) {
            postJob();
          }
        }}
      />

      <Modal visible={openCategoryModal} transparent style={{ flex: 1 }}>
        <View style={styles.modalMainView}>
          <View style={styles.listingView}>
            <Text style={[styles.title, { marginTop: moderateScale(20) }]}>
              Select Category
            </Text>
            <FlatList
              data={profiles}
              renderItem={(item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                      setSelectedCategory(index);
                      setCategoryModal(false);
                    }}
                  >
                    <Text>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>

      <Modal visible={openSkillModal} transparent style={{ flex: 1 }}>
        <View style={styles.modalMainView}>
          <View style={styles.listingView}>
            <Text style={[styles.title, { marginTop: moderateScale(20) }]}>
              Select Skill
            </Text>
            <FlatList
              data={
                selectedCategory == "Select Category"
                  ? profiles[0]
                  : profiles[selectedCategory]
              }
              renderItem={(item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                      setSelectedSkill(item[0]);
                      setSkillModal(false);
                    }}
                  >
                    <Text>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Loader visible={loading} />
    </SafeAreaView>
  );
};
export default EditJob;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  header: {
    width: "100%",
    height: verticalScale(45),
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: moderateScale(20),
  },
  back: {
    width: scale(16),
    height: scale(16),
  },
  title: {
    fontSize: moderateScale(20),
    marginLeft: moderateScale(20),
    fontWeight: "600",
  },
  modalMainView: {
    backgroundColor: "rgba(0,0,0,0.3,)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  listingView: {
    width: "90%",
    height: "80%",
    borderRadius: moderateScale(10),
    backgroundColor: BG_COLOR,
  },
  profileItem: {
    width: "90%",
    height: verticalScale(40),
    justifyContent: "center",
    paddingLeft: moderateScale(20),
    aliggnSelf: "center",
    borderBottomWidth: 0.4,
  },
  errorMsg: {
    color: "red",
    marginLeft: moderateScale(25),
  },
});

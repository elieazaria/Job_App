import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
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
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import firestore from "@react-native-firebase/firestore";

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [badJobTitle, setBadJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [badJobDesc, setBadJobDesc] = useState("");
  const [exp, setExp] = useState("");
  const [badExp, setBadExp] = useState("");
  const [salary, setSalary] = useState("");
  const [badSalary, setBadSalary] = useState("");
  const [company, setCompany] = useState("");
  const [badCompany, setBadJobCompany] = useState("");
  const navigation = useNavigation();
  const [openCategoryModal, setCategoryModal] = useState(false);
  const [openSkillModal, setSkillModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [badJobCategory, setBadJobCategory] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("Select Skill");
  const [badJobSkill, setBadJobSkill] = useState("");
  const [loading, setLoading] = useState(false);
  /*
  const postJob = async () => {
    let id = await AsyncStorage.getItems("USER_ID");
    let name = await AsyncStorage.getItems("NAME");

    setLoading(true);
    firestore()
      .collection("jobs")
      .add({
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
  const validate = () => {
    let validJobTitle = true;
    let validJobDesc = true;
    let validCategory = true;
    let validSkill = true;
    let validExp = true;
    let validPackage = true;
    let validCompany = true;

    if (jobTitle == "") {
      validJobTitle = false;
      setBadJobTitle("Please Enter Job Title");
    } else if (jobTitle != "") {
      validJobTitle = true;
      setBadJobTitle("");
    }

    if (jobDesc == "") {
      validJobTitle = false;
      setBadJobDesc("Please Enter Job Description");
    } else if (jobDesc != "" && jobDesc.length < 50) {
      validJobDesc = false;
      setBadJobDesc("Entrer une description minimum 50 caractères");
    } else if (jobDesc != "" && jobDesc.length >= 50) {
      validJobDesc = false;
      setBadJobDesc("");
    }

    if (selectedCategory == "Select Category") {
      validCategory = false;
      setBadJobCategory("Please Select Job Category");
    } else if (selectedCategory != "Select Category") {
      validCategory = true;
      setBadJobCategory("");
    }

    if (selectedSkill == "Select Skill") {
      validSkill = false;
      setBadJobSkill("Please Select Job Skill");
    } else if (selectedSkill != "Select Skill") {
      validSkill = true;
      setBadJobSkill("");
    }

    let expRegex = /^\d+$/;
    if (exp == "") {
      validExp = false;
      setBadExp("Please Enter Experience");
    } else if (exp != "" && exp.length > 2) {
      validExp = false;
      setBadJobTitle("Please Enter Valid Experience");
    } else if (exp != "" && exp.length < 3 && !exp.match(expRegex)) {
      validExp = false;
      setBadJobTitle("Please Enter Valid Experience");
    } else if (exp != "" && exp.length < 3 && exp.match(expRegex)) {
      validExp = true;
      setBadExp("");
    }

    if (salary == "") {
      validPackage = false;
      setBadSalary("Please Enter Salary");
    } else if (salary != "" && !salary.match(expRegex)) {
      validExp = false;
      setBadSalary("Please Enter Valid Salary");
    } else if (salary != "" && salary.match(expRegex)) {
      validPackage = true;
      setBadSalary("");
    }

    if (company == "") {
      validCompany = false;
      setBadJobCompany("Please Enter Company");
    } else if (company != "") {
      validCompany = true;
      setBadJobCompany("");
    }

    return;
    validJobTitle &&
      validJobDesc &&
      validCategory &&
      validSkill &&
      validExp &&
      validPackage &&
      validCompany;
  };
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
        <Text style={styles.title}> Proposer un offre </Text>
      </View>
      <CustomTextInput
        value={jobTitle}
        onChangeText={(txt) => {
          setJobTitle(txt);
        }}
        title={"Titre"}
        placeholder={"ex. Service traiteur"}
        bad={badJobTitle != "" ? true : false}
      />
      {badJobTitle != "" && <Text style={styles.errorMsg}>{badJobTitle}</Text>}

      <CustomTextInput
        value={jobDesc}
        onChangeText={(txt) => {
          setJobDesc(txt);
        }}
        title={"Description"}
        placeholder={"ex. Pour un anniversaire à organiser ..."}
        bad={badJobDesc != "" ? true : false}
      />
      {badJobDesc != "" && <Text style={styles.errorMsg}>{badJobDesc}</Text>}
      <CustomDropDown
        value={jobDesc}
        onChangeText={(txt) => {
          setCategoryModal(txt);
        }}
        title={"Catégorie"}
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
        placeholder={"ex. 3 ans"}
        bad={badExp != "" ? true : false}
      />
      {badExp != "" && <Text style={styles.errorMsg}>{badExp}</Text>}
      <CustomTextInput
        value={salary}
        onChangeText={(txt) => {
          setSalary(txt);
        }}
        keyboardType={"number-pad"}
        title={"Salaire"}
        placeholder={"ex. 1M Ar"}
        bad={badSalary != "" ? true : false}
      />
      {badSalary != "" && <Text style={styles.errorMsg}>{badSalary}</Text>}
      <CustomTextInput
        value={company}
        onChangeText={(txt) => {
          setCompany(txt);
        }}
        title={"Lieu"}
        placeholder={"ex. Antananarivo"}
        bad={badCompany != "" ? true : false}
      />
      {badCompany != "" && <Text style={styles.errorMsg}>{badCompany}</Text>}
      <CustomSolidBtn
        title={"Valider l'offre"}
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
export default AddJob;
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
    marginTop: moderateScale(20),
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

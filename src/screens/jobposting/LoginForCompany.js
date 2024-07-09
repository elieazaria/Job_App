import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR } from "../../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../../common/CustomTextInput";
import CustomSolidBtn from "../../common/CustomSolidBtn";
import CustomBorderBtn from "../../common/CustomBorderBtn";
import { useNavigation } from "@react-navigation/native";
//import firestore from "@react-native-firebase/firestore";
import Loader from "../../common/Loader";

const LoginForCompany = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let validEmail = true;
    let validPass = true;

    let emailRegex =
      /^(([^<>()[\]\\..;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "") {
      validEmail = false;
      setBadEmail("Entrer votre Email");
    } else if (email != "" && !email.toString().match(emailRegex)) {
      validEmail = false;
      setBadEmail("Enter une email valide");
    } else if (email != "" && !email.toString().match(emailRegex)) {
      validEmail = true;
      setBadEmail("");
    }

    if (password == "") {
      validPass = false;
      setBadPassword("Entrer votre mot de passe");
    } else if (password != "" && password.length < 6) {
      validPass = false;
      setBadPassword("Entrer minimum caractères");
    } else if (password != "" && password.length <= 6) {
      validPass = true;
      setBadPassword("");
    }

    return validEmail && validPass;
  };
  /*
  const loginUser = () => {
    setLoading(true);
    firestore()
      .collection("job_posters")
      .where("email", "==", email)
      .get()
      .then((data) => {
        setLoading(false);
        console.log(data.docs);
        if (data.docs.length > 0) {
          if (item0data().password == password) {
            setBadEmail("");
            setBadPassword("");
            goToNextScreen(item.id, item.data().email, item.data().name);
          } else {
            setBadPassword("Wrong Password");
          }
        } else {
          setBadEmail("No User exists with thi Email");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
*/ /*
  const goToNextScreen = async (id, email, name) => {
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("USER_ID", id);
    await AsyncStorage.setItem("USER_TYPE", "company");
    navigation.navigate("DashboardForCompany");
  };
  */
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../images/portefeuille.png")}
        style={styles.logo}
      />
      <Text style={styles.title}> Se connecter </Text>
      <CustomTextInput
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
        title={"Email"}
        placeholder={"xyz@gmail.com"}
        bad={badEmail != "" ? true : false}
      />
      {badEmail != "" && <Text style={styles.errorMsg}>{badEmail}</Text>}
      <CustomTextInput
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
        title={"Mot de passe"}
        placeholder={"********"}
        bad={badPassword != "" ? true : false}
      />
      {badPassword != "" && <Text style={styles.errorMsg}>{badPassword}</Text>}
      <Text style={styles.forgotPassword}> Mot de passe oublié ?</Text>

      <CustomSolidBtn
        title={"Se connecter"}
        onClick={() => {
          if (validate()) {
            navigation.navigate("DashBoardForCompany");
            //loginUser();
          }
        }}
      />

      <CustomBorderBtn
        onClick={() => {
          navigation.navigate("SignUpForCompany");
        }}
        title={"Créer une compte"}
      />
      <Loader visible={loading} />
    </SafeAreaView>
  );
};
export default LoginForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  logo: {
    width: scale(80),
    height: scale(80),
    alignSelf: "center",
    marginTop: moderateVerticalScale(40),
  },
  title: {
    fontSize: moderateScale(20),
    alignSelf: "center",
    fontWeight: "600",
    marginTop: moderateVerticalScale(30),
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: moderateScale(20),
    marginTop: moderateVerticalScale(10),
    fontWeight: "500",
    fontSize: moderateScale(16),
  },
});

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { BG_COLOR } from "../../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import CustomTextInput from "../../common/CustomTextInput";
import CustomSolidBtn from "../../common/CustomSolidBtn";
import CustomBorderBtn from "../../common/CustomBorderBtn";
import Loader from "../../common/Loader";
import { useNavigation } from "@react-navigation/native";
//import firestore from "@react-native-firebase/firestore";

const SignUpForCompany = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [contact, setContact] = useState("");
  const [badContact, setBadContact] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [badCompanyName, setBadCompanyName] = useState("");

  const [address, setAddress] = useState("");
  const [badAddress, setBadAddress] = useState("");
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState("");

  const validate = () => {
    let nameRegex = /^[A-Za-z]+$/;
    let validEmail = true;
    let validName = true;
    let validContact = true;
    let validCompany = true;
    let validAdress = true;
    let validPass = true;

    if (name == "") {
      validName = false;
      setBadName("Entrer votre nom");
    } else if (name != "" && name.length < 3) {
      validName = false;
      setBadName("Entrer votre nom");
    } else if (name != "" && name.length > 3) {
      validName = true;
      setBadName("");
    }

    if (name == "") {
      validName = false;
      setBadName("Entrer votre nom");
    } else if (name != "" && name.length < 3) {
      validName = false;
      setBadName("Entrer votre nom");
    } else if (
      name != "" &&
      name.length >= 3 &&
      !name.toString().match(nameRegex)
    ) {
      validName = false;
      setBadName("Entrer votre nom");
    } else if (
      name != "" &&
      name.length > 3 &&
      !name.toString().match(nameRegex)
    ) {
      validName = true;
      setBadName("");
    }

    let emailRegex =
      /^(([^<>()[\]\\..;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "") {
      validEmail = false;
      setBadEmail("Entrer votre Email");
    } else if (email != "" && !email.toString().match(emailRegex)) {
      validEmail = false;
      setBadEmail("Entrer une email valide");
    } else if (email != "" && !email.toString().match(emailRegex)) {
      validEmail = true;
      setBadEmail("");
    }

    let contactRegex = /^\d+$/;
    if (contact == "") {
      validContact = false;
      setBadContact("Entrer votre contact ");
    } else if (contact != "" && contact.length < 10) {
      validContact = false;
      setBadContact("Entrer un contact valide ");
    } else if (
      contact != "" &&
      contact.length >= 10 &&
      !contact.match(contactRegex)
    ) {
      validContact = false;
      setBadContact("Entrer un contact valide");
    } else if (
      contact != "" &&
      contact.length >= 10 &&
      !contact.match(contactRegex)
    ) {
      validContact = true;
      setBadContact("");
    }

    if (companyName == "") {
      validCompany = false;
      setBadCompanyName("Entrer votre nom d'utilisateur");
    } else if (companyName != "") {
      validCompany = true;
      setBadCompanyName("");
    }

    if (address == "") {
      validAdress = false;
      setBadAddress("Entrer votre adresse");
    } else if (address != "") {
      validAdress = true;
      setBadAddress("");
    }

    if (password == "") {
      validPass = false;
      setBadPassword("Entrer votre mot de passe");
    } else if (password != "" && password.length < 6) {
      validPass = false;
      setBadPassword("Entrer au minimum 6 Caractères");
    } else if (password != "" && password.length <= 6) {
      validPass = true;
      setBadPassword("");
    }

    return (
      validName &&
      validEmail &&
      validContact &&
      validCompany &&
      validAdress &&
      validPass
    );
  };
  /*
  const registerUser = () => {
    setLoading(true);
    firestore()
      .collection("job_posterq")
      .add({
        name,
        email,
        contact,
        address,
        companyName,
        password,
      })
      .then(() => {
        setName("");
        setBadEmail("");
        setPassword("");
        setAddress("");
        setCompanyName("");
        setContact("");
        setAccountCreated(true);
        setLoading(false);
        setTimeout(() => {
          navigation.goBack();
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  */
  return (
    <SafeAreaView style={styles.container}>
      {!accountCreated ? (
        <ScrollView>
          <Image
            source={require("../../images/portefeuille.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Créer une compte</Text>
          <CustomTextInput
            value={name}
            onChangeText={(txt) => {
              setName(txt);
            }}
            title={"Nom"}
            placeholder={"xyz"}
            bad={badName != "" ? true : false}
          />
          {badName != "" && <Text style={styles.errorMsg}>{badName}</Text>}
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
            value={contact}
            onChangeText={(txt) => {
              setContact(txt);
            }}
            title={"Contact"}
            placeholder={"0332025421"}
            bad={badContact != "" ? true : false}
          />
          {badContact != "" && (
            <Text style={styles.errorMsg}>{badContact}</Text>
          )}
          <CustomTextInput
            value={companyName}
            onChangeText={(txt) => {
              setCompanyName(txt);
            }}
            title={"Nom d'utilisateur"}
            placeholder={"ex. google"}
            bad={badCompanyName != "" ? true : false}
          />
          {badCompanyName != "" && (
            <Text style={styles.errorMsg}>{badCompanyName}</Text>
          )}
          <CustomTextInput
            value={address}
            onChangeText={(txt) => {
              setAddress(txt);
            }}
            title={"Adresse"}
            placeholder={"ex. Tana"}
            bad={badAddress != "" ? true : false}
          />
          {badAddress != "" && (
            <Text style={styles.errorMsg}>{badAddress}</Text>
          )}
          <CustomTextInput
            value={password}
            onChangeText={(txt) => {
              setPassword(txt);
            }}
            title={"Mot de passe"}
            placeholder={"********"}
            bad={badPassword != "" ? true : false}
          />
          {badPassword != "" && (
            <Text style={styles.errorMsg}>{badPassword}</Text>
          )}
          <CustomSolidBtn
            title={"S'inscrire"}
            onClick={() => {
              if (validate()) {
                registerUser();
              }
            }}
          />
          <CustomBorderBtn
            title={"Se connecter"}
            onClick={() => {
              navigation.goBack();
            }}
          />
          <Loader visible={loading} />
        </ScrollView>
      ) : (
        <View style={styles.doneView}>
          <Image source={styles.logo} />
          <Text style={styles.title}>{"Compte crée"}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default SignUpForCompany;

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
  errorMsg: {
    marginLeft: moderateScale(25),
    color: "red",
  },
  doneView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

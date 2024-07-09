import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { BG_COLOR, TEXT_COLOR } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const SearchCandidates = () => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const addSearchHistory = () => {
    if (search && !searchHistory.includes(search)) {
      setSearchHistory([search, ...searchHistory]);
      setSearch("");
    }
  };

  const removeSearchItem = (item) => {
    setSearchHistory(
      searchHistory.filter((historyItem) => historyItem !== item)
    );
  };

  const renderSearchHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => removeSearchItem(item)}>
        <Image
          source={require("../../../images/chercher.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={addSearchHistory}>
            <Image
              source={require("../../../images/chercher.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Rechercher"
            placeholderTextColor="gray"
            style={styles.input}
            value={search}
            onChangeText={(txt) => {
              setSearch(txt);
            }}
          />

          <TouchableOpacity onPress={() => setSearch("")}>
            <Image
              source={require("../../../images/cross.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={searchHistory}
          renderItem={renderSearchHistoryItem}
          keyExtractor={(item) => item}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Pas d'historique de recherche</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchCandidates;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  searchBox: {
    width: "90%",
    height: verticalScale(45),
    borderWidth: 1,
    alignSelf: "center",
    marginTop: moderateScale(20),
    borderRadius: moderateScale(30),
    borderColor: "#9e9e9e",
    flexDirection: "row",
    paddingLeft: moderateScale(15),
    alignItems: "center",
  },
  icon: {
    width: scale(16),
    height: scale(16),
    tintColor: "gray",
    marginLeft: moderateScale(10),
  },
  input: {
    width: "75%",
    height: "100%",
    marginLeft: moderateScale(10),
    fontSize: moderateScale(16),
    color: TEXT_COLOR,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#ccc",
  },
  emptyText: {
    textAlign: "center",
    marginTop: moderateScale(20),
  },
});

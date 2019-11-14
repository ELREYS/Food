import React from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput, StyleSheet, View, Button } from "react-native";

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.iconStyle} name="search"></Feather>
      <TextInput 
      style={styles.inputStyle} 
      placeholder="Search"
      value={term}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      >

      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    marginHorizontal: 15,
    marginBottom:10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;

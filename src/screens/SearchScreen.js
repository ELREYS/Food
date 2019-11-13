import React, {useState}from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import SearchBar from "../component/SearchBar";

const SearchScreen = () => {
  [term,setTerm] = useState("");
    return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={() => console.log("Submited")
      }
      ></SearchBar>
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

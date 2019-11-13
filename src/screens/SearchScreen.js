import React, { useState,useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from '../hooks/useResults';
const SearchScreen = () => {
  [term, setTerm] = useState();
  [searchApi,results,errorMessage] = useResults();
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

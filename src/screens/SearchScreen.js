import React, {useState}from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import SearchBar from "../component/SearchBar";
import yelp from '../api/yelp';

const SearchScreen = () => {
  [term,setTerm] = useState("");
  [results,setResults] = useState([]);
    
    searchApi= async () => {
        const response  = await yelp.get('/search',{
            params:{
                limit: 50,
                term,
                location: "Basel",
            }
        });
        setResults(response.data.businesses);
    }

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={searchApi}
      ></SearchBar>
      <Text>Search Screen</Text>
      <Text>We have found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

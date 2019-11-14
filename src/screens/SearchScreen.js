import React, { useState } from "react";
import { Text, StyleSheet,ScrollView, View, } from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../component/ResultsList";


filterResultsbyPrice = (price) =>{
    // price === $ || $$ || $$$
    return results.filter(result =>{
        return result.price === price;
    })

}

const SearchScreen = () => {
  [term, setTerm] = useState();
  [searchApi,results,errorMessage] = useResults();
  
  
  
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ScrollView>
      <ResultsList results={filterResultsbyPrice('$')} title="Cost Effective"></ResultsList>
      <ResultsList results={filterResultsbyPrice('$$')} title="Bit Pricier"></ResultsList>
      <ResultsList results={filterResultsbyPrice('$$$')} title="Big Spender"></ResultsList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor:'red',
        borderWidth:10,
    }
});

export default SearchScreen;

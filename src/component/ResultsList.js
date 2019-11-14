import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title,results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={results}
      keyExtractor={(result) => result.id }
      renderItem={({item})=> {
          return <ResultsDetail results={item}/>
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
    },

    container:{
        marginBottom:10,
    }
});

export default ResultsList;

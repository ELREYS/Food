import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultShow')}>
              <ResultsDetail results={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },

  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);

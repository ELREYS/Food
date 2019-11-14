import React, { useState, useEffect } from "react";
import { Image,FlatList, Text, StyleSheet, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  console.log(result);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.title} >{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin:15,
  },
  title:{
      marginLeft:15,
      marginTop:5,
      fontSize:16,
      fontWeight:'bold',
  }
});

export default ResultsShowScreen;

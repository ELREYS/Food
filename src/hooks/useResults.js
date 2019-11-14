import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  [results, setResults] = useState([]);
  [errorMessage, setErrorMessage] = useState("");

  searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Basel"
        }
      });
      setResults(response.data.businesses);
      //console.log(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi,results,errorMessage];
};

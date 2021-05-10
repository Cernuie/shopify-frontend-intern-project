import React, { Fragment, useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import axios from "axios";
import Results from "./Results";


const API_KEY = process.env.OMDB_KEY; 

export default function Nominations(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?s=${term}?&type=movie&apikey=9c24beab`;
    //fix dotenv later
    axios
    .get(apiUrl)
    .then((response) => {
      const existingIds = new Set()
      const filteredResponse = response.data.Search.filter((obj) => !existingIds.has(obj.imdbID) && existingIds.add(obj.imdbID))
      // console.log("filtered:", filteredResponse)
      setResults(filteredResponse);
    })
    .catch((e) => console.log(`error ${e}`));
}, [term]);

return (
  <Fragment>
    <div className="flex-centre">
    <SearchBar onSearch={(term) => setTerm(term)} />
    </div>
    <div className="movieStyles">
      <Results results={results} />
    </div>
  </Fragment>
);
}

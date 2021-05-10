import Tabs from "./components/Tabs"; 

import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Nominations from "./components/Nominations"

import React, { useState } from "react";

import './App.css';

function App() {
  const [nominations, setNominations] = useState([])
  const [term, setTerm] = useState("");

  return (

    <main>
    <div>
      <h1>Movie Awards!</h1>
      <div>    
        <SearchBar onSearch={(term) => setTerm(term)} />
      </div>
     <Tabs> 
       <div label="Search Results"> 
         <SearchResults
         nominations={nominations}
         setNominations={setNominations}
         />
       </div> 
       <div label="Nominations"> 
         <Nominations
         nominations={nominations}
         />
       </div> 
     </Tabs> 
    </div>

    </main>
  );
}

export default App;

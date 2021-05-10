import React from "react";

import './MovieDetails.css'
//import useNominationsData from "hooks/useNominationsData"

export default function MovieDetails(props) {
  // const {nominations, setNominations} = useNominationsData();
  return (
    <article className="Movie">
      <div>
        <img
          className="Movie__thumbnail"
          src={props.Poster}
          alt="Movie"
        />
        <div className="Movie__name">{props.Title}</div>
        <div className="Movie__year">{props.Year}</div>
        <div className="nomination">  
        <button onClick={() => props.handleNominations(props.Title)}>Nominate!</button>
        </div>
      </div>
    </article>
  );
}

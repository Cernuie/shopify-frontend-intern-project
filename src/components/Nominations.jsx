import React, {useEffect} from 'react';

export default function Nominations(props) {
  console.log(props.nominations.movies)
  

  return (
    props.nominations.movies.map((movie, index) => {
      return(
      <ul>
        <li>
          Title {index}: {movie} 
        </li>
      </ul>
      )
    })
  )
}
import React from 'react';
import axios from 'axios';

// export const fetchShow = () => {
//     return axios.get
//       .then(res => console.log(res)) // or res.data, however you want to set that up
//   }
    
  export const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      ).then(res => res )
  };


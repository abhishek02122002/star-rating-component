import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test(){
  const [movieRating,setMovieRating] = useState(0);
  return(
    <div>

      
      <StarRating color="blue" maxRating={10} onSetRating ={setMovieRating}/>
      <p>This Movie is rated {movieRating} stars</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <StarRating/>
 <StarRating maxRating={6} size={30} messages={['work hard','intermediate','good','very good','excellent','outstanding']} defaultRating={4} color={'#010101'} textColor={'yellow'} />
 </>
);



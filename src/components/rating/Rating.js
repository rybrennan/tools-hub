import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function MyComponent(prop) {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  
    // other logic
  };
  

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        /* Available Props */
        size={23}
        initialValue={prop.active}
      />
    </div>
  )
}
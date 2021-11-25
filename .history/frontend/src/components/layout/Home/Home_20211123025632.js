import React from 'react'
import { CgMouse } from 'react-icons/all'

export default function Home() {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to FoodReviews</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1> 

        <a href='#container'>
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
    </Fragment>
  )
}

import React from 'react'
import Posts from '../../Component/Content/Posts/Posts'
import Category from '../../Component/Content/Category/Category'
const Home = () => {


  return (
    <div className='home-section'>
      <Posts />
      <Category />
    </div>
  )
}

export default Home
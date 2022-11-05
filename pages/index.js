import React from 'react'
import Blogs from '../components/Blogs' 
import Stats from '../components/Stats'
import Courses from '../components/Courses'
import Videos from '../components/Videos'
import Contact from '../components/Contact' 
import Carousal from '../components/Carousal'

function index() {
  return (
    <div> 
      <Carousal/>
      <Courses/>
      <Videos/> 
      <Stats />
      <Blogs/>
      <Contact/>
    </div>
  )
}

export default index
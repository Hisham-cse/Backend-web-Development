import React,{useEffect} from 'react'

const Navbar = ({color}) => {
 // Case 1:RUN on Every render
useEffect(() => {
  alert("Hey I will run on every render")
})

// Case 1:RUN on Every render
useEffect(() => {
  alert("Hey welcome to my page. This is my first render")
},[])

// Case 3:RUN on count change
useEffect(() => {
  alert("Hey I am running because color was changed")
},[color])
  return (
    <div>
      I am Navbar of {color} color hehe..
    </div>
  )
}

export default Navbar

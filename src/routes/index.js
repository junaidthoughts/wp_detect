import React from 'react'
import NormalRoutes from "./NormalRoutes"
import AuthRoutes from "./AuthRoutes"

const BaseRoutes = ({user, setUser}) => {
  return (
        user ?
        <NormalRoutes />
      :
        <AuthRoutes setUser={setUser}/>
  )
}

export default BaseRoutes
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Home() {
  const { isAuthenticated, user } = useAuth0()
  if (user) {
    return (
      <>
        <div>Hello {user.name}</div>
        <div>{user.nickname}</div>
        <div>email: {user.email}</div>
        <div>email: {user.email}</div>
        <div>email: {user.email}</div>
        <div>email: {user.email}</div>
      </>
    )
  }
  return <div>Home</div>
}

export default Home

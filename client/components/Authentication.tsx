import { useAuth0 } from '@auth0/auth0-react'

function Authentication() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0()

  if (user) {
    console.log(user);
  }


  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{' '}
        {user?.id}
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      </div>
    )
  } else {
    return (
      <>
        <button onClick={() => loginWithRedirect()}>Log in</button>
        <h1>Authentication page</h1>
        <h3>User not logged in yet</h3>
      </>
    )
  }
}

export default Authentication
function getSpotifyAccessToken() {
  throw new Error('Function not implemented.')
}

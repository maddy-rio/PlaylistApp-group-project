import React from 'react'

// Create the authorization URL
const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=edcdc478bd3b486dbd641b390065c0cf&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private&20%user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

  const code = new URLSearchParams(window.location.search).get('code')
  console.log(code)
const Login = () => {
  return <div>
   <a href={AUTH_URL}>Log in with Spotity</a>
    </div>
}

export default Login

// import React, { useEffect, useState } from 'react'

// const Login: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null)

//   useEffect(() => {
//     const client_id = 'edcdc478bd3b486dbd641b390065c0cf'
//     const client_secret = '8a5c13bc700040758a29b4175847c84a'

//     const authOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`),
//       },
//       body: new URLSearchParams({
//         grant_type: 'client_credentials',
//       }),
//     }

//     fetch('https://accounts.spotify.com/api/token', authOptions)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         return response.json()
//       })
//       .then((data) => {
//         const accessToken: string = data.access_token
//         setToken(accessToken)
//         // You can use the 'accessToken' variable here.

//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error(error)
//       })
//   }, []) // Run the effect only once when the component mounts

 

//   return (
//     <div>
//       <h1>Login Component</h1>
//       {token && (
//         <p>
//           Access Token: {token}
//           {/* Use the token in your component as needed */}
//         </p>
//       )}
//     </div>
//   )
// }

// export default Login

import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Auth0Provider } from '@auth0/auth0-react'

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <Auth0Provider
    domain="manaia-2023-murray.au.auth0.com"
    clientId="zc99N78AwOThbE3oLrvDTt4qGFtKuD6q"
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    authorizationParams={{
      redirectUri: 'http://localhost:5173/login/callback',
      scope:
        'openid profile email user-read-private user-read-email offline_access',
      audience: 'https://vibesvault/api',
      refreshToken: {
        rotation_type: 'rotating',
        expiration_type: 'expiring',
        token_lifetime: '1800',
        leeway: 3,
      },
    }}
  >
    <QueryClientProvider client={queryClient}>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>,
)

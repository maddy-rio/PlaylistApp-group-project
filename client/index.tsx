import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

import '@radix-ui/themes/styles.css'
import '../client/styles/theme-config.css'
import { Theme } from '@radix-ui/themes'

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <Theme>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
  </Theme>
)

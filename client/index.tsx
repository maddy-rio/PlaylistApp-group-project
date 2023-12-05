import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routes'

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
  </QueryClientProvider>,
)

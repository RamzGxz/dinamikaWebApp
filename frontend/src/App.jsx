import AdminDashboard from './components/AdminDasboard'
import HomePage from './components/HomePage'
import StockPage from './components/StockPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/stock", element: <StockPage /> },
    { path: "/admin/dashboard", element: <AdminDashboard /> },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

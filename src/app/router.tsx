import { createBrowserRouter } from 'react-router-dom'
import { ProductList } from '../features/products/components/ProductList'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
])
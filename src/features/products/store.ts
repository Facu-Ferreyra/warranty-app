import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from './types'

type ProductStore = {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, data: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (data) =>
        set((state) => ({
          products: [...state.products, { ...data, id: crypto.randomUUID() }],
        })),
      updateProduct: (id, data) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
    }),
    { name: 'warranty-storage' }
  )
)
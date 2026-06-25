import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { productT } from './types'

type productStoreT = {
  products: productT[];
  addProduct: (product: productT) => void;
  updateProduct: (id: string, data: Partial<productT>) => void;
  deleteProduct: (id: string) => void;
};

export const useProductStore = create< productStoreT >()(
  persist(
    (set) => ({
      products: [],
      addProduct: (data) =>
        set((state) => ({
          products: [...state.products, { ...data, id: crypto.randomUUID() }],
        })),
      updateProduct: (id, data) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, ...data } : product
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
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { productsInStateT, productT } from './types'

type productStoreT = {
  products: productT[];
  addProduct: (product: productT) => void;
  updateProduct: (id: string, data: Partial<productT>) => void;
  deleteProduct: (id: string) => void;
};


export const useProductStore = create<productStoreT> ()(

    persist(

        (set)  => {

            return {

                products: [] ,
            
                addProduct: ( data ) => {

                    set( (state : productStoreT ) : productsInStateT => {

                        return {

                            products: [
                                ...state.products,
                                {
                                    ...data,
                                    id: crypto.randomUUID()
                                }
                            ]

                        }
                    } )

                }
                ,
                updateProduct: ( id, data) => {

                    set( (state) : productsInStateT => {

                        return {
                            products: state.products.map( 
                                (product) => {
                                return product.id === id 
                                                    ? {...product, ...data}
                                                    : product
                            } )
                        }
                    } )

                }
                ,
                deleteProduct: (id) => {

                    set( (state) : productsInStateT => {
                        return {
                            products: state.products.filter( (product) => product.id !== id )
                        }
                    } )

                }

            }

        },
        {name: "warranty-storage"}

    )

)


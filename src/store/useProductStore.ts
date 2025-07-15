import { Product } from '@/types';
import { create } from 'zustand';

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   tags: string[];
//   brand: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: string[];
//   thumbnail: string;
// }

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateProduct: (updated: Product) => void;
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === updated.id ? updated : p)),
    })),
  setProducts: (products) => set({ products }),
}));

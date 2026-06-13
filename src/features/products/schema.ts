import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  category: z.string().min(1, 'La categoría es obligatoria'),
  purchaseDate: z.string().min(1, 'La fecha de compra es obligatoria'),
  durationMonths: z.number().min(1, 'La duración debe ser al menos 1 mes'),
})

export type ProductFormData = z.infer<typeof productSchema>
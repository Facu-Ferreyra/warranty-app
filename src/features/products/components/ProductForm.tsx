import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema, type ProductFormData } from '../schema'
import { useProductStore } from '../store'

export function ProductForm() {
  const addProduct = useProductStore((s) => s.addProduct)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = (data: ProductFormData) => {
    addProduct(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 border rounded-lg">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Producto</label>
        <input
          id="name"
          {...register('name')}
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
          placeholder="Smart TV Samsung"
        />
        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="category" className="text-sm font-medium">Categoría</label>
        <select id="category" {...register('category')} className="mt-1 w-full border rounded px-3 py-2 text-sm">
          <option value="">Elegir categoría...</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Electrodoméstico">Electrodoméstico</option>
          <option value="Herramienta">Herramienta</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label htmlFor="purchaseDate" className="text-sm font-medium">Fecha de compra</label>
        <input
          id="purchaseDate"
          type="date"
          {...register('purchaseDate')}
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
        />
        {errors.purchaseDate && <p className="text-red-600 text-xs mt-1">{errors.purchaseDate.message}</p>}
      </div>

      <div>
        <label htmlFor="durationMonths" className="text-sm font-medium">Duración (meses)</label>
        <input
          id="durationMonths"
          type="number"
          {...register('durationMonths', { valueAsNumber: true })}
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
          placeholder="24"
        />
        {errors.durationMonths && <p className="text-red-600 text-xs mt-1">{errors.durationMonths.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 text-sm hover:bg-blue-700">
        Agregar producto
      </button>
    </form>
  )
}
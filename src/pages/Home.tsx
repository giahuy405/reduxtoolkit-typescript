import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../redux/configStore'
import { getAllProduct } from '../redux/productReducer/productReducer';
import ProductCard from '../components/ProductCard';

type Props = {}

export default function Home({ }: Props) {
  const dispatch: DispatchType = useDispatch();
  const { productList } = useSelector((state: RootState) => state.productReducer);
 
  useEffect(() => {
    dispatch(getAllProduct())
  }, [])
  return (
    <div className='bg-slate-700 py-10'>

      {/* Product llisst */}
      <h3 className='text-center text-2xl font-bold text-white mb-4'>Product List</h3>
      <div className='max-w-[1000px] mx-auto grid grid-cols-4 gap-3'>
        {productList?.map((prod) =>
          <ProductCard key={prod.id} prod={prod} />
        )}
      </div>
    </div>
  )
}
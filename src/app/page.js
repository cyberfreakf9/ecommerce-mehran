import FilterByproduct from '@/components/filterbyproduct'
import ProductList from '@/components/productList'
import SearchItem from '@/components/searchItem'
import { BiSearch } from 'react-icons/bi'
export default function Home() {
  return (
    <main className="flex  flex-col  justify-between mt-10 ">
      <SearchItem />
      <FilterByproduct />
      <ProductList />
    </main>
  )
}

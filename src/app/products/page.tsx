import SearchContent from "@/components/public/SearchContent"
import Filter from "@/components/public/Filter"
import ProductList from "@/components/public/ProductList"
import Footer from "@/components/public/Footer"

export default function Products() {
    return (
        <div className="mt-28 mx-10">
            <SearchContent></SearchContent>
            <Filter></Filter>
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    )
}
import CartCard from "@/components/public/CartCard"
import OrderSummary from "@/components/public/OrderSummary"
import ViewdList from "@/components/detail/ViewdList"
import Recommend from "@/components/detail/Recommend"

export default function Cart() {
    return (
        <div className="mt-28 mx-8">
            <div className="flex justify-between">
                <div className="w-[56%]">
                    <CartCard></CartCard>
                </div>
                <div className="w-[36%]">
                    <OrderSummary></OrderSummary>
                </div>
            </div>
            <ViewdList></ViewdList>
            <div className="mt-6">
                <Recommend></Recommend>
            </div>
        </div>
    )
}
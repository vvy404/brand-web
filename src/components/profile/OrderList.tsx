import Image from "next/image"
export default function OrderList() {
  return (
    <div className="text-[#1b1b1b]">
      <div className="text-sm">MY ORDER HISTORY</div>
      <div className="mt-14">
        <div className="flex justify-between items-center text-xs">
          <div className="w-16">
            <Image src="/a.jpeg" alt="img" width={100} height={100} />
          </div>
          <div>4 Items</div>
          <div>Order number: #111</div>
          <div>2024-06-10</div>
          <div>Delivered</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          
        </div>
        <div className="h-1 mt-2 pb-2 border-t border-solid border-gray-200"></div>
      </div>
    </div>
  )
}
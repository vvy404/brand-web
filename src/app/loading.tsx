import Image from "next/image"
export default function Loading() {
  return (
    <div className="bg-white w-full h-[60vh] pt-[30%] overflow-hidden text-center text-m align-middle">
      <Image src="/loading.svg" alt="" width={30} height={30} className="inline mr-[10px]" />loading
    </div>
  )
}
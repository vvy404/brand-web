export default function Paginator() {
    return (
        <div className="flex flex-col items-center justify-center">
            <button className="bg-black text-white text-sm px-10 py-4">Next Page</button>
            <div className="flex mt-6 text-sm justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-200">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <a href="http://localhost:3000/products" className="px-2 mx-4 bg-black text-white">1</a>
                <a href="http://localhost:3000/products" className="px-2 mx-4">2</a>
                <a href="http://localhost:3000/products" className="px-2 mx-4">3</a>
                <a href="http://localhost:3000/products" className="px-2 mx-4">4</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>
    )
}
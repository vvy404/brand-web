export default function Paginator() {
    return (
        <div className="flex flex-col">
            <button>Next Page</button>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <a href="http://localhost:3000/products">1</a>
                <a href="http://localhost:3000/products">2</a>
                <a href="http://localhost:3000/products">3</a>
                <a href="http://localhost:3000/products">4</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>
    )
}
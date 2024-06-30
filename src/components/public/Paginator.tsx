import Link from "next/link";
interface PaginatorProps {
  pageTotal: number;
  currentPageIndex: number;
  onPageIndexChange: (index: number) => void
}
const Paginator: React.FC<PaginatorProps> = ({
  pageTotal,
  currentPageIndex,
  onPageIndexChange,
}) => {
  const pageArr = [];
  for (let i = 0; i < pageTotal; i++) {
    pageArr.push(i + 1);
  }

  const handleClickIndex = (index: number) => {
    if (index < 0 || index >= pageTotal) return;
    onPageIndexChange(index);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {
        (currentPageIndex < pageTotal - 1) && (
          <button className="bg-black text-white text-sm px-10 py-4" onClick={() => handleClickIndex(currentPageIndex - 1)}>Next Page</button>
        )
      }

      <div className="flex mt-6 text-sm justify-center items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`size-6 ${currentPageIndex === 0 ? 'text-gray-200' : ''}`}
          onClick={() => handleClickIndex(currentPageIndex - 1)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <div>
          {
            pageArr.map((i, idx) => {
              return (
                <div onClick={() => handleClickIndex(idx)} className={`inline-block px-2 mx-4 ${currentPageIndex === idx ? 'bg-black text-white' : ''}`}>{idx + 1}</div>
              )
            })
          }
        </div>

        {/* <a href="http://localhost:3000/products" className="px-2 mx-4">2</a>
        <a href="http://localhost:3000/products" className="px-2 mx-4">3</a>
        <a href="http://localhost:3000/products" className="px-2 mx-4">4</a> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${currentPageIndex === (pageTotal - 1) ? 'text-gray-200' : ''}`} onClick={() => handleClickIndex(currentPageIndex + 1)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

      </div>
    </div>
  )
}

export default Paginator;
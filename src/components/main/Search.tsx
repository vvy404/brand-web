import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useRef } from "react";

import { MainProductType } from "@/lib/globalts";

const inter = Inter({ subsets: ["latin"] });

type SearchCompProps = {
  show: boolean
  handleClickSearchWrapper: () => void;
  handleSearch: (val: string) => void;
}

export default function SearchComp({
  show = false,
  handleClickSearchWrapper,
  handleSearch,
}: SearchCompProps
) {
  const [searchVal, setSearchVal] = useState("");
  const inputRef = useRef("");
  const handleSearchValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  }

  const handleBGClick = (e: React.SyntheticEvent<EventTarget>) => {
    // e.stopPropagation();
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const el = e.target?.dataset?.id;
    if (el === "input-Wrapper") {
      handleClickSearchWrapper();
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch(searchVal);
    }
    
  }

  return show ? (
  <div data-id="input-Wrapper" className="flex w-full h-[100vh] bg-white bg-opacity-80 " onClick={handleBGClick}>
    <input data-id="inputSearch" className="w-full h-12 border mt-2 text-black pl-4" placeholder="  SEARCH CONTENT" value={searchVal} onChange={handleSearchValChange} onKeyDown={handleKeyDown} />
  </div>) : ""
}
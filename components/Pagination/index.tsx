import * as React from "react";

interface paginationProps {
  pageNumber: number;
  numberOfPages: number;
  setPage: (page:number)=>void;
}

export default function Pagination(props: paginationProps) {
  const { pageNumber, numberOfPages, setPage } = props;

  return (
    <div>
      <div id="pagination" className="flex">
        <div
          className={`m-1 h-6 w-6 shrink items-center rounded-full bg-white text-center font-FDparastoo ${
            pageNumber == 1 ? "hidden" : ""
          }`}
          onClick={() => setPage(1)}
        >
          {"<"}
        </div>
        {pageNumber == 1 ||
        pageNumber == 2 ||
        pageNumber == 3 ||
        pageNumber == 4 ? (
          ""
        ) : (
          <div
            className={`m-1 h-6 w-6 shrink items-center rounded-full bg-white text-center font-FDparastoo`}
          >
            {"..."}
          </div>
        )}
        {[...Array(numberOfPages).keys()].map(x=>x+1).map((number) => {
          return (
            <div
              key={number}
              className={`m-1 h-6 w-6 shrink items-center rounded-full text- ${pageNumber==number?"bg-sky-500 text-white font-bold":"bg-white"} text-center font-FDparastoo ${pageNumber-number>3?"hidden":""} ${number-pageNumber>3?"hidden":""}`}
              onClick={() => setPage(number)}
            >
              {number}
            </div>
          );
        })}
        {numberOfPages - pageNumber == 0 ||
        numberOfPages - pageNumber == 1 ||
        numberOfPages - pageNumber == 2 ||
        numberOfPages - pageNumber == 3 ||
        numberOfPages==0? (
          ""
        ) : (
          <div
            className={`m-1 h-6 w-6 shrink items-center rounded-full bg-white text-center font-FDparastoo`}
          >
            {"..."}
          </div>
        )}

        <div
          className={`m-1 h-6 w-6 shrink items-center rounded-full bg-white text-center font-FDparastoo ${
            pageNumber == numberOfPages ||numberOfPages==0? "hidden" : ""
          }`}
          onClick={() => setPage(numberOfPages)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

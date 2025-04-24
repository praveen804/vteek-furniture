import React from 'react'

interface LatestProductTopBarProps {
  isFetching: boolean;
  LatestFilterProduct: { id: string; label: string }[];
  filter: string;
  handleFilter: (filterType: string) => void;
}

const LatestProductTopBar : React.FC<LatestProductTopBarProps>  = ({ isFetching, LatestFilterProduct, filter, handleFilter}) => {
  return (
        <div className='flex flex-wrap justify-center gap-4 mb-10'>
          {isFetching
            ? Array.from({ length: LatestFilterProduct.length }).map(
                (_, index) => (
                  <div
                    key={index}
                    className='w-28 h-10 bg-gray-200 animate-pulse rounded-md'
                  ></div>
                )
              )
            : LatestFilterProduct.map((button) => (
                <button
                  type='button'
                  key={button.id}
                  onClick={() => handleFilter(button.id)}
                  className={`px-5 py-2 rounded-lg border ${
                    filter === button.id
                      ? 'bg-custom-1 text-white border-custom-1'
                      : 'bg-white text-gray-700 border-gray-300'
                  } hover:bg-custom-1 hover:text-white transition-all duration-200`}
                >
                  {button.label}
                </button>
              ))}
        </div>
  )
}

export default LatestProductTopBar
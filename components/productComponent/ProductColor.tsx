import React from 'react'

const ProductColor = ({color}:{color:string[]}) => {
  return (
    <div className="flex gap-2 items-center">
      {color.map((value) => (
        <button
          key={value}
          type="button"
          style={{ backgroundColor: value }}
          className="w-5 h-5 rounded-full border border-black hover:border-2 hover:border-custom-1 transition-all duration-300"
        ></button>
      ))}
    </div>
  );
}

export default ProductColor

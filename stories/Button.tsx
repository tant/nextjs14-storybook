import React from 'react';
import '../app/globals.css';

interface ButtonProps {
  /**
  *  Đây có phải là nút Primary dùng cho CTA hay không?
  */
  primary?: boolean;
  /**
  *  Cái này để dành khi nào check darkmode, chưa biết làm
  */
  darkmode?: boolean;
  /**
  *  Kích thước từ 1 tới 5
  */
  size?: number;
  /**
  *  Button text
  */
  label: string;
  /**
  *  Optional click handler
  */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction asdfasdf
 */
export const Button = ({
  primary = true,
  size = 3,
  darkmode = true,
  label,
  ...props
}: ButtonProps) => {
  var clsround;
  var clspxy;
  var clstextsize;
  var clsbg;
  var clscommon = "font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

  if (primary) {
    clsbg = "bg-indigo-600 text-white hover:bg-indigo-500";
  } else {
    clsbg = "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
  }

  switch(size) { 
    case 1: {
      clsround = "rounded";
      clspxy = "px-2 py-1";
      clstextsize = "text-xs";
      break;
    }
    case 2: {
      clsround = "rounded";
      clspxy = "px-2 py-1";
      clstextsize = "text-sm";
      break;
    }
    case 3: {
      clsround = "rounded-md"
      clspxy = "px-2.5 py-1.5";
      clstextsize = "text-sm";
      break;
    }
    case 4: {
      clsround = "rounded-md"
      clspxy = "px-3 py-2";
      clstextsize = "text-sm";
      break;
    }
    case 5: {
      clsround = "rounded-md"
      clspxy = "px-3.5 py-2.5";
      clstextsize = "text-sm";
      break;
    }
    default: {
      clsround = "rounded-md"
      clspxy = "px-2.5 py-1.5";
      clstextsize = "text-sm";
      break;
    }
  }  

  return (
    <div>
      <button
        type="button"
        className={[clsround,clspxy,clstextsize,clsbg,clscommon].join(" ")}
        {...props}
      >
        {label}
      </button>

    </div>
  );
};

